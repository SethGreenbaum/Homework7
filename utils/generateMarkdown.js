function generateMarkdown(response, user) {
  return `
# ${response.project} \n
## Created By:\n
![Profile Image](${user.avatar_url})\n
${user.name}\n
*GitHub Username: ${response.username}\n
*Email: ${response.email}\n
*Location: ${user.location}\n
*Bio: ${user.bio}\n
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
## Credits\n
${response.credits}\n
## Contributing \n
${response.contributing} \n
## License \n
${response.license} \n
## Tests \n
${response.testing} \n
## Questions \n
${response.questions} \n
\n
![badge](https://img.shields.io/badge/Generated%20By-README%20Generator-blue)\n
\n
`;
}

module.exports = generateMarkdown;
