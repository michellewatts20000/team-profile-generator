// generates a readme from the inquirer answers
const generateMarkdown = (mapMembersCards) =>

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
      <div class="col-lg-9">
        <div class="card-deck">
         ${mapMembersCards}
        </div>
      </div>
    </div>
  </body>
  </html>

`;

module.exports = generateMarkdown;