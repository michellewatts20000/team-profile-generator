// generates a readme from the inquirer answers
const generateMarkdown = (mapMembersCards) =>

  `<!DOCTYPE html>
  <head>
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <style>
.card{
  border-radius:0;
}
.card-header{
  border-radius:0 !important;
}
.btn {
  border-radius:0 !important;
}

.jumbotron{
  border-radius:0 !important;
}
  </style>
  
    </head>
  <body>
    <div class="jumbotron bg-dark text-white">
      <h1 class="text-center">Team Profile Generator</h1>
    </div>
    <div class="container">
      <div class="card-deck">
        <div class="row justify-content-center">
        
         ${mapMembersCards}

        </div>
      </div>
      
    </div>
  </body>
  </html>
`;

module.exports = generateMarkdown;