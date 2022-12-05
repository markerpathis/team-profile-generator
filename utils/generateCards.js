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
              ID: ${team[i].getId()} <br />Email: ${team[i].getEmail()} <br />
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
          ID: ${team[i].getId()} <br />Email: ${team[i].getEmail()} <br />
          GitHub: ${team[i].engineerUsername}
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
          ID: ${team[i].getId()} <br />Email: ${team[i].getEmail()} <br />
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

module.exports = generateCards;
