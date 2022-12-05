function generateCards(team) {
  let cardString = "";
  for (i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      var cardTemplate = `
          <div class="card">
          <header class="card-header">
            <p class="card-header-title">${team[i].getName()}<br />${team[i].getRole()}</p>
          </header>
          <div class="card-content">
            <div class="content">
              ID: ${team[i].getId()} <br />Email: ${team[i].getEmail()} <br />
              Office Number: xx
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
