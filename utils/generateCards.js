// Generates the cards for the team profile using the information saved in the team array
function generateCards(team) {
  let cardString = "";
  let cardTemplate = "";
  for (i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      cardTemplate = `
          <div class="card">
          <header class="card-header">
            <p class="card-header-title">${team[i].getName()}<br />${team[i].getRole()}</p>
          </header>
          <div class="card-content">
            <div class="content">
              ID: ${team[i].getId()} <br />Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a> <br />
              Office Number: ${team[i].managerOffice}
            </div>
          </div>
        </div>
            `;
      cardString = cardString + cardTemplate;
    } else if (team[i].getRole() === "Engineer") {
      cardTemplate = `
      <div class="card">
      <header class="card-header">
        <p class="card-header-title">${team[i].getName()}<br />${team[i].getRole()}</p>
      </header>
      <div class="card-content">
        <div class="content">
          ID: ${team[i].getId()} <br />Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a> <br />
          GitHub: <a href="https://github.com/${team[i].engineerUsername}" target="_blank">${team[i].engineerUsername}</a>
        </div>
      </div>
    </div>
        `;
      cardString = cardString + cardTemplate;
    } else if (team[i].getRole() === "Intern") {
      cardTemplate = `
      <div class="card">
      <header class="card-header">
        <p class="card-header-title">${team[i].getName()}<br />${team[i].getRole()}</p>
      </header>
      <div class="card-content">
        <div class="content">
          ID: ${team[i].getId()} <br />Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a> <br />
          School: ${team[i].internSchool}
        </div>
      </div>
    </div>
        `;
      cardString = cardString + cardTemplate;
    }
  }
  return cardString;
}

// Exports generageCards so it can be used ouside of this specific js file after being imported
module.exports = generateCards;
