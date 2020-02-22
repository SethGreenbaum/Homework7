const Api = require("./utils/api");
const Markdown = require("./utils/generateMarkdown")
var inquirer = require("inquirer");
var fs = require('fs');
const axios = require("axios");

function generateMarkdown(response, user) {
    return `
  # ${response.project} \n
  ## Created By:\n
  ![Profile Image]
  (${user.avatar_url})
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
        message: "What is your Github Username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is the name of your repository?"
    },
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please Describe your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation installation instructions your project"
    },
    {
        type: "input",
        name: "description",
        message: "Please Describe your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Please Describe your project usage"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the license for your project"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list all contributors"
    },
    {
        type: "input",
        name: "testing",
        message: "Please describe testing procedures"
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