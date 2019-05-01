let width = 1600, height = 2800;

function setup() {
 createCanvas(width, height);
 loadCountries("countries.json");
}

function draw() {

}

function loadCountries(_url) {
 let countries = loadJSON(_url, onCountriesLoaded);
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function onCountriesLoaded(_data) {
  let sameYearObject = {};
  for (let i = 0; i < _data.length; i++) {
    if (_data[i].Year != null && _data[i].Year[0] > 0) {
      const key = _data[i].w + '_' + _data[i].Year;
      !sameYearObject[key] ? sameYearObject[key] = 1 : sameYearObject[key] += 1
    }
  }
  console.log(sameYearObject);
  for (let j = 0; j < Object.size(sameYearObject); j++) {
    let x = random(width);
    let name = Object.keys(sameYearObject)[j];
    let size = Math.sqrt(Object.values(sameYearObject)[j]);
    let y = random(height - size*100 - 10, height - size*100 + 10);
    let year = Object.keys(sameYearObject)[j].slice(-5, -1);
    let xPos = map(year, 1950, 2020, 100, width-50);
    let red = map(size, 0, 26, 100, 0);
    let green = map(size, 0, 26, 255, 0);
    noStroke();
    fill(red, green, 200, 150);
    ellipse(xPos, y, size*10, size*10);
    fill(10, 50, 100);
    text(name, xPos, y);
  }
}



// function onCountriesLoaded(_data) {
//   let sameYearObject = {};
//   for (let i = 0; i < _data.length; i++) {
//     if (_data[i].Year != null) {
//       const key = _data[i].w + '_' + _data[i].Year;
//       !sameYearObject[key] ? sameYearObject[key] = 1 : sameYearObject[key] += 1
//     }
//   }
// }


// function onCountriesLoaded(_data) {
//   for (let i = 0; i < _data.length; i++) {
//     let name = _data[i].w;
//     if (_data[i].Year != null) {
//       // let x = random(width);
//       let y = random(height);
//       let col = color(255, (_data[i].Year == null ? 0 : 255), 0);

//       if (_data[i].Year[0] > 0) {
//         // console.log(_data[i].Year[0]);
//           xPos = map(_data[i].Year[0], 1960, 2020, 0, width);
//           fill(col);
//           ellipse(xPos, y, 5, 5);
//           fill(0);
//           text(_data[i].w, xPos, y);
//       }
//     }
//   }
// }
