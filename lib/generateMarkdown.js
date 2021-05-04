

// generates a readme from the inquirer answers
const generateMarkdown = (answers) =>

  `<!DOCTYPE html>
  <html>
  <head>
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="text-center">Team Profile Generator</h1>
    </div>
    <div class="container">
      <div class="col-sm-6 col-sm-offset-3">
          <h2>Here are some of my favorite things!</h2>
          <ul>
            <li>Coding</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
      </div>
    </div>
  </body>
  </html>
`;

module.exports = generateMarkdown;