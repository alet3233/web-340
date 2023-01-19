const Team = require('./team.js')
let team = [
    new Team("team one", "mascot one", 1),
    new Team("team two", "mascot two", 2),
    new Team("team three", "mascot three", 3),
    new Team("team four", "mascot four", 4),
    new Team("team five", "mascot five", 5)
]

function getTeams() {
    return team
}

module.exports.getTeams = getTeams;

function getTeam(teamName) {
    return team.find(currentTeam => currentTeam.name === teamName)
}
module.exports.getTeam = getTeam;

function displayTeam(team) {
    return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayerCount: " + team.playerCount +"\n";
}
module.exports.displayTeam = displayTeam;