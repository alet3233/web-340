const TeamManager = require("./team-manager");

let teams = TeamManager.getTeams();

console.log("-- DISPLAYING TEAMS --")
for (let team of teams) {
    console.log(TeamManager.displayTeam(team))
}

console.log("\n--DISPLAYING A SINGLE TEAM--");
let team4 = TeamManager.getTeam("team four");
console.log(TeamManager.displayTeam(team4))

let team5 = TeamManager.getTeam("team five");
console.log(TeamManager.displayTeam(team5))
