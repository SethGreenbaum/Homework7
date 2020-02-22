const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");

console.log(
    `\n
    ======================================\n
    -----Welcome to README generator!-----\n
    ======================================\n
    \n
    - - - - - - - - - - - - - - - - - - - \n
    -----Let's make a README together!----\n
    - - - - - - - - - - - - - - - - - - - \n
    \n`
)

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is the GitHub Username of your project repo?"
    },
    {
        type: "input",
        name: "email",
        message: "Provide a contact email address"
    },
    // {
    //     type: "password",
    //     name: "password",
    //     message: "Enter your password to authenticate"
    // },
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Now, write a description of your project and it's purpose:"
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
        message: "Enter the name of the type of license you are using with your project"
    },
    {
        type: "input",
        name: "contributing",
        message: "Here you should list contribution requirements for this project"
    },
    {
        type: "input",
        name: "testing",
        message: "Describe the methods used to test the project:"
    },
    {
        type: "input",
        name: "credits",
        message: "Here you should credit the other developers who helped you with this project:"
    },
    {
        type: "input",
        name: "questions",
        message: "List some relevant questions"
    }
];

function writeToFile(response,userObj) {
    var markdown = generateMarkdown(response,userObj)
    fs.writeFile("README.md", markdown , function(err) {
      if (err) {
        return console.log(err);
      } 
      console.log("Success!"); 
     });
}

function init() {
    inquirer.prompt(questions).then(function(data) {
        var response = data;
        const usernameUrl = `https://api.github.com/users/${data.username}`
        // ?client_id=${response.username}&client_secret=${response.password}`
        axios.get(usernameUrl ).then(function (res) {
            writeToFile(response,res.data)
            }).catch(function (error) {
            console.log(error);
            }).then(function () {
            console.log("Thank you for using README generator")
            });
        ;
    });
}

init();