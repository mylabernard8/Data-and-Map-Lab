let populations = [];
let maxPopulation = 0;
let minPopulation = Infinity;

function setup() {
  createCanvas(800, 400);

  //fake population data for cities
  for (let i = 0; i < 10; i++) {
    let population = int(random(50000, 1000000)); // Population between 50,000 and 1,000,000
    populations.push(population);

    if (population > maxPopulation) {
      maxPopulation = population;
    }
    if (population < minPopulation) {
      minPopulation = population;
    }
  }
}

function draw() {
  background(240);

  let barWidth = width / (populations.length + 2);
  
  for (let i = 0; i < populations.length; i++) {
    let x = (i + 1) * barWidth;
    let barHeight = map(populations[i], minPopulation, maxPopulation, 0, height - 100);

    // Draw the bar
    fill("steelblue");
    noStroke();
    rect(x, height - barHeight - 50, barWidth * 0.6, barHeight);
  }
  
  // Draw baseline
  stroke(0);
  line(0, height - 50, width, height - 50);
}

