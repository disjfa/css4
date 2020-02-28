let getFeatures = require('./components/features');
let getAgents = require('./components/agents');

const agents = getAgents();
const features = getFeatures();

function getAgentDate(agent, version) {
  for (let a in agents) {
    if (agents[a].name.toLowerCase() === agent.toLowerCase()) {
      for (let v in agents[a].dates) {
        if (agents[a].dates[v].number === version) {
          return agents[a].dates[v].date;
        }
      }
    }
  }
}

function getActiveFeatures() {
  let data = [];
  for (let i in features) {
    const feature = features[i];
    let skip = false;
    for (let b in feature.browsers) {
      if (false === feature.browsers[b]) {
        skip = true;
      }
    }

    if (false === skip) {
      data.push(feature);
    }
  }
  return data;
}

module.exports = function () {
  let data = [];

  const activeFeatures = getActiveFeatures();
  for (let i in activeFeatures) {
    const dates = [];
    const feature = activeFeatures[i];
    for (let b in feature.browsers) {
      dates.push(getAgentDate(b, feature.browsers[b]));
    }
    dates.sort((a, b) => b - a);
    data.push({
      feature,
      date: dates.shift(),
    });
  }

  data.sort((a, b) => b.date - a.date)

  return data;
};
