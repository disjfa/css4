const fs = require('fs');

module.exports = function () {
  let entrypoints = {};
  try {
    const data = fs.readFileSync('./build/entrypoints.json', 'utf8');
    entrypoints = JSON.parse(data);
  } catch (e) {
    return {};
  }

  return entrypoints.entrypoints;
};

