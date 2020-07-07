export const projectQuesions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: projectName => (projectName ? true : false),
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: projectDesc => (projectDesc ? true : false),
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: [
            'JavaScript',
            'HTML',
            'CSS',
            'ES6',
            'jQuery',
            'Bootstrap',
            'Node',
        ],
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: link => (link ? true : false),
    },
    {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false,
    },
]
