const fs = require('fs')
const inquirer = require('inquirer')
// const fs = require('fs')

inquirer.prompt([
    {
    name: 'title',
    message: 'What is the title of your app?',
    type: 'input'
},
    {
    name: 'description',
    message: 'Please describe your application',
    type: 'input'
},
    {
    name: 'github',
    message: 'What is your github username?',
    type: 'input'
},
    {
    name: 'email',
    message: 'What is your email address?',
    type: 'input'
},
    {
    name: 'license',
    message: 'What license does this app use (if any)',
    type: 'input'
},
    {
    name: 'usage',
    message: 'How is your repo meant to be used?',
    type: 'input'
},
    {
    name: 'contributing',
    message: 'Please list any guidelines for contributing to the repo.',
    type: 'input'
},
]).then(ans => {
    console.log(JSON.stringify(ans))
fs.writeFileSync('./newReadme/README.md', `## Title

# ${ans.title}


## Description

# ${ans.description}

## Github Username

# ${ans.github}


## Email

# ${ans.email}

## License
# ${ans.license}
`)
})