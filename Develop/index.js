const Api = require("./utils/api");
const Markdown = require("./utils/generateMarkdown")
var inquirer = require("inquirer");
var fs = require('fs');
const axios = require("axios");

console.log(
    `=====================================\n
    -----Welcome to README generator!-----\n
    ======================================\n
    ======================================\n
    ======================================\n
    ======================================\n
    - - - - - - - - - - - - - - - - - - - \n
    -----Let's make a README together!----\n
    - - - - - - - - - - - - - - - - - - - \n
    ######################################\n`
)

function generateMarkdown(response, user) {
    return `
  # ${response.project} \n
  ## Created By:\n
  ![Profile Image](${user.avatar_url})\n
  ${user.name}\n
  *GitHub Username: ${response.username}\n
  *Email: ${user.email}\n
  ## Description \n
  ${response.description} \n
  ## Table of Contents \n
  * [Installation](#installation) \n
  * [Usage](#usage) \n
  * [Contributors](#contributors) \n
  * [License](#license) \n
  * [Tests](#tests) \n
  * [Questions](#questions) \n
  ## Installation \n
  ${response.installation} \n
  ## Usage \n
  ${response.usage} \n
  ## Contributors \n
  ${response.contributing} \n
  ## License \n
  ${response.license} \n
  ## Tests \n
  ${response.testing} \n
  ## Questions \n
  ${response.questions} \n
  `;
  }
// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }
 
// init();


inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Now, write a brief description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Here, provide installation instructions your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe here what your project does and how you intend to use it:"
    },
    {
        type: "input",
        name: "license",
        message: "Enter the name of the type of license you are using with your project, or enter -none-"
    },
    {
        type: "input",
        name: "contributing",
        message: "Here you should list all contributors to this project"
    },
    {
        type: "input",
        name: "testing",
        message: "Describe the methods used to test the project"
    },
    {
        type: "input",
        name: "questions",
        message: "Please list all questions"
    }
]).then(function(data) {
    console.log(data)
    // var repoObj;
    var userObj;
    var response = data;

    // const repoUrl = `https://api.github.com/repos/${data.username}/${data.repo}`
    const usernameUrl = `https://api.github.com/users/${data.username}`
    // axios.get(repoUrl).then(function(res) {
    //     repoObj = res.data
    //     console.log(repoObj)
    // });
    axios.get(usernameUrl).then(function(res) {
        userObj = res.data
        console.log(userObj)
        var markdown = generateMarkdown(response,userObj)
        fs.writeFile("README.md", markdown , function(err) {
    
          if (err) {
            return console.log(err);
          }
      
          console.log("Success!");
      
         });
    });
    // var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  });

//   module.exports = Username