let data = {};
let links = [];
let sameCountryObject = {};
let sameCountryJSON = [];

let fs = require('fs');

data = JSON.parse(fs.readFileSync('countries.json'));

function setup() {
  // console.log(data);
  // for (let i = 0; i < data.length; i++) {
  //   for (let j = i + 1; j < data.length; j++) {
  //       links.push({
  //         "source": i,
  //         "target": j,
  //         "distance": Math.abs(data[i].value - data[j].value)
  //       })
  //   }
  // }

  for (let i = 0; i < data.length; i++) {
    const key = data[i].w
    !sameCountryObject[key] ? sameCountryObject[key] = 1 : sameCountryObject[key] += 1
  }


  let size = Object.keys(sameCountryObject).length;
  for (let object in sameCountryObject) {
    sameCountryJSON.push({
      "country": object,
      "frequency": sameCountryObject[object]
    })
  }

  let marcDATA = JSON.stringify(sameCountryJSON);
  fs.writeFileSync('nodes.json', marcDATA);
}

setup()
