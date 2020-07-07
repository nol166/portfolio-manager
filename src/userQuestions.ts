export const userQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => (nameInput ? true : false),
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: github => (github ? true : false),
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message:
            'Would you like to enter some information about yourself for an "About" section?',
        default: true,
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout,
    },
]
