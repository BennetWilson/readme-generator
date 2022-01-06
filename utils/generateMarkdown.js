// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if((license === 'Apache 2.0')) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if
    ((license === 'BSD 3')) {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }else if
  ((license === 'GPL v3')) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
} else if
((license === 'MIT')) {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} else if
((license === 'MPL 2.0')) {
  return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
} else if
((license === 'none')) {
  return `No License`
}
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // generating TOC based on user inputs in data
  let ToC = `## Table of Contents`;

  if (data.install !== '') { ToC += `
  * [Installation](#installation)` };

  if (data.usage !== '') { ToC += `
  * [Usage](#usage)` };

  if (data.contributing !== '') { ToC += `
  * [Contributing](#contributing)` };

  if (data.tests !== '') { ToC += `
  * [Tests](#tests)` };


const license = renderLicenseBadge(data.license)
  // generating markdown
  let Markdown = 
  `# ${data.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
  

  
  
  ## Description 
  

  
  ${data.description}


  ## Images




  ## Links



  
  `

  // add TOC to markdown
  Markdown += ToC;
 
  // add required license section
  Markdown += `
  * [License](#license)`;
  

  // optional installation section
  if (data.installation !== '') {
  
  Markdown +=
  `
  
  ## Installation
  
  
  
  ${data.install}`
  };
  

  // optional usage section
  if (data.usage !== '') {
  
  Markdown +=
  
  `
  
  ## Usage 
  
  
  
  ${data.usage}`
  };
  
  
  // optional contributing section
  if (data.contributing !== '') {

  Markdown +=
    
  `
  
  ## Contributing
  
  
  
  ${data.contributors}`
  };
  

  // optional tests section
  if (data.tests !== '') {
  
  Markdown +=
  `
  
  ## Tests
  
 
  
  ${data.test}`
  };


  // license section is required. adding badge
  Markdown +=
  `
  
  ## License

${license}
  
  `
  ;


  // questions or contact dev section. adding dev to markdown
  let Dev = 
  `
  
  
  ## Questions?
 
  GitHub: [@${data.username}]
  `;

  // add email to dev if not null
  if (data.questions !== null) {
  
  Dev +=
  `
  Email: ${data.questions}
  `};

  // add developer section to markdown
  Markdown += Dev;

  // return markdown
  return Markdown;
  
}

module.exports = generateMarkdown;
  

