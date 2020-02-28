let lite = require('caniuse-lite');

function getAgents() {
  const data = [];
  for(let i in lite.agents) {
    let agent = lite.agents[i];

    let dates = [];
    for(let n in agent.release_date) {
      dates.push({
        number: n,
        date: new Date(agent.release_date[n] * 1000),
      });
    }

    data.push({
      name: agent.browser,
      dates: dates.sort((a, b) => b.date - a.date),
    })
  }

  return data;
}

module.exports = function () {
  return getAgents();
};
