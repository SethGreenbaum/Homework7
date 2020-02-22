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
##Credits\n
${response.credits}\n
## Contributing \n
${response.contributing} \n
## License \n
${response.license} \n
## Tests \n
${response.testing} \n
## Questions \n
${response.questions} \n
`;
}

module.exports = generateMarkdown;
