loadTeam();
function loadTeam() {
  fetch('/teams').then(_=>_.json()).then(teams => {
    console.log(teams);
    if (!teams || !teams.length) return;
  
    var div = document.getElementById('generated-content');
    div.innerHTML = '';
    var clicks = Array(teams.length);
    document.querySelector('.button:nth-child(4) .icon').style.backgroundImage = 'url("../img/b4-off.png")';
    document.querySelector('.button:nth-child(2) .icon').style.backgroundImage = 'url("../img/b2-on.png")';
    teams.forEach((team, i) => {
      var teamBtn = document.createElement('div');
      teamBtn.classList = 'team-button';
      clicks[i] = 0;
      teamBtn.addEventListener('click', function() {
        clicks[i]++;
        document.getElementById('info-team').style.visibility = 'visible';
        clicks[teamBtn]++;
        if (clicks[i] === 2) {
          console.log(document);
          loadDocuments(document);
        }
      });
      teamBtn.innerText = team.name;
      div.appendChild(teamBtn);
    });
  });
}

function loadDocuments(document) {
  console.log(document);
  var div = document.getElementById('generated-content');
  div.innerHTML = '';
  var document = document.createElement('div');
  document.classList = 'document';
  div.appendChild(document);
}


function loadWorkflow() {
  document.getElementById('generated-content').innerHTML = '';
  document.getElementById('info-team').style.visibility = 'hidden';
  document.querySelector('.button:nth-child(4) .icon').style.backgroundImage = 'url("../img/b4-on.png")';
  document.querySelector('.button:nth-child(2) .icon').style.backgroundImage = 'url("../img/b2-off.png")';
}