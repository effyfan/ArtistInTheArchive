let data = {};
let links = [];

let fs = require('fs');

data = JSON.parse(fs.readFileSync('nodes.json'));

function setup() {

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        links.push({
          "source": i,
          "target": j,
          "distance": Math.abs(data[i].frequency - data[j].frequency)
        })
    }
  }

  let marcDATA = JSON.stringify(links);
  fs.writeFileSync('links.json', marcDATA);
}

setup()
