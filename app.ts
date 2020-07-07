import { templateData as generatePage } from './src/page-template'
import { prompt } from 'inquirer'
import { makeFile, copyStyle } from './utils/generateSite'
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
            let result = projectData.confirmAddProject
                ? promptProject(portfolioData)
                : portfolioData
            return result
        }
    )
}

promptUser()
    .then(promptProject)
    .then((portfolioData: any) => {
        return generatePage(portfolioData)
    })
    .then(pageHTML => {
        return makeFile(pageHTML)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse)
        return copyStyle()
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse)
    })
    .catch(err => {
        console.log(err)
    })
