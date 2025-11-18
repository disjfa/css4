let lite = require('caniuse-lite');

function getFirstYes(stat) {
  for (let j in stat) {
    if (stat[j] === 'y') {
      return j;
    }
  }
  return false;
}

function getFeatures() {
  const data = [];
  for (let i in lite.features) {
    const feature = lite.feature(lite.features[i]);

    data.push({
      name: i,
      title: feature.title,
      status: feature.status,
      browsers: {
        chrome: getFirstYes(feature.stats.chrome),
        firefox: getFirstYes(feature.stats.firefox),
        edge: getFirstYes(feature.stats.edge),
        safari: getFirstYes(feature.stats.safari),
        ios_saf: getFirstYes(feature.stats.ios_saf),
        and_chr: getFirstYes(feature.stats.and_chr),
      }
    });
    // return lite.feature(lite.features[i]);
  }

  return data;
}

module.exports = function () {
  return getFeatures();
};
