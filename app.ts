import { writeFile } from 'fs'
import { generatePage } from './src/page-template'
const profileDataArgs = process.argv.slice(2, process.argv.length)
const [userName, github] = profileDataArgs

const writeToFile = writeFile(
    'index.html',
    generatePage(userName, github),
    err => {
        if (err) throw err

        console.log(
            'Portfolio complete! Check out index.html to see the output!'
        )
    }
)
