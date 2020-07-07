import { writeFile } from 'fs'
import { templateData as generatePage } from './src/page-template'
import { prompt } from 'inquirer'
import { userQuestions } from './src/userQuestions'
import { projectQuesions } from './src/projectQuestions'

const promptUser = () => {
    return prompt(userQuestions)
}

const promptProject = (portfolioData: { projects: any[] }) => {
    if (!portfolioData.projects) {
        portfolioData.projects = []
    }
    console.log(`
  =================
  Add a New Project
  =================
  `)
    return prompt(projectQuesions).then(
        (projectData: { confirmAddProject: boolean }) => {
            portfolioData.projects.push(projectData)
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData)
            } else {
                return portfolioData
            }
        }
    )
}

promptUser()
    .then(promptProject)
    .then((portfolioData: any) => {
        const pageHTML = generatePage(portfolioData)
        writeFile('./index.html', pageHTML, err => {
            if (err) throw new Error()
            console.log(
                'Page created! Check out index.html in this directory to see it!'
            )
        })
    })
