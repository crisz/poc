fetch('/teams').then(_=>_.json()).then(teams => {
  console.log(teams);
  if (!teams || !teams.length) return;

  var div = document.getElementById('team-container');

  var clicks = {};
  teams.forEach(team => {
    var teamBtn = document.createElement('div');
    teamBtn.classList = 'team-button';
    teamBtn.addEventListener('click', function() {
      clicks[team] = clicks[team] || 0;
      document.getElementById('info-team').style.visibility = 'visible';
      clicks[team]++;
      if (clicks[team] === 2) {
        alert('loadDocuments()');
      }
    });
    teamBtn.innerText = team.name;
    div.appendChild(teamBtn);
  });
});