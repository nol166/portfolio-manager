import { writeFile } from 'fs'
import { generatePage } from './src/page-template'
import { prompt } from 'inquirer'
import { userQuestions } from './src/userQuestions'
import { projectQuesions } from './src/projectQuestions'
const profileDataArgs = process.argv.slice(2, process.argv.length)
const [userName, github] = profileDataArgs

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
        console.log(portfolioData)
    })
