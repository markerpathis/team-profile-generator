function generateHTML() {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./Assets/style.css" />

    <title>Team Profile</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
  </head>

  <body id="body">
    <header class="">
      <section class="hero is-primary has-text-centered">
        <div class="hero-body">
          <p class="title">Team Profile</p>
        </div>
      </section>
    </header>
    <div class="container cardcontainer pt-6 pl-6 pr-6 is-centered">
    </div>
  </body>
</html>
  `;
}

module.exports = generateHTML;
