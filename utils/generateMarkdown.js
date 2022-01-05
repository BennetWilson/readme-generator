// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License
  ${data.license}
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Testing
  ${data.test}
  ## Contributors
  ${data.contributors}
  ## Questions?
  ${data.questions}
  ### GitHub Username
  ${data.username}
  ### GitHub Repositories
  ${data.repo}
`;
}

module.exports = generateMarkdown;
