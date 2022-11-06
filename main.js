function createGame(player1, hour, player2){
  return`
  <li>
    <img src="./assets/${player1}.svg" alt="">
      <strong>${hour}</strong>
    <img src="./assets/${player2}.svg" alt="">
  </li>
  `
}

function createCard(date, day, games){
  return `
    <div id="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
<header>
  <img src="./assets/logo.svg" />
</header>
<main id="cards">
  ${createCard('24/11', 'quinta', 
    createGame('icon-brazil', '16:00', 'icon-serbia'))}
  ${createCard('28/11', 'segunda', 
    createGame('icon-brazil', '13:00', 'icon-switzerland'))}
  ${createCard('02/12', 'sexta', 
    createGame('icon-brazil', '16:00', 'icon-cameroon'))}
</main>
`