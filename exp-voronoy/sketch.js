/// <reference path="../p5.global-mode.d.ts" />

const width = 1200;
const height = 1100;
let seedsColored = garden_random(200, width, height, "array")

function setup() {
  frameRate(20)

  seedsColored = seedsColored.map((seed) => {
    seed[2] = color(map(dist(seed[0], seed[1], width / 2, height / 2), 0, 500, 255, 0)
      , map(dist(seed[0], seed[1], width / 2, height / 2), 0, 500, 0, 255)
      , 0);
    return seed;
  })

  createCanvas(width, height);
  //noSmooth();

  voronoiCellStrokeWeight(1);
  voronoiSiteStrokeWeight(3);
  voronoiCellStroke(0);
  voronoiSiteStroke(0);
  voronoiSiteFlag(true);

  voronoiJitterStepMax(20);
  voronoiJitterStepMin(5);
  voronoiJitterFactor(5);
  voronoiJitterBorder(false);


  //Sets 30 random sites with 50 minimum distance to be added upon computing
  //Please note that this method is just for testing, you should use your own
  //method for placing random sites with minimum distance
  voronoiSites(seedsColored);

  //Add array of custom sites
  //voronoiSites([[5,5],[10,5],[15,5]]);

  //Add array of custom sites with custom colors associated (255 = white)
  //voronoiSites([[5,20,255],[10,20,255],[15,20,255]]);

  //Remove custom site with coordinates 15,5
  //voronoiRemoveSite(15, 5);

  //Remove custom site with index 0 (in this case it's the site with coordinates [5,5])
  //voronoiRemoveSite(0);

  //Add custom site with coordinates i*30,50
  //for (var i = 0; i < 10; i++) {
  //voronoiSite(i * 30, 50);
  //}

  //Add custom site with custom color at coordinates 50,100 (255 = white)
  //voronoiSite(50, 100, 255);

  //Clear custom sites (does not clear random sites)
  //voronoiClearSites();

  //Jitter Settings (These are the default settings)


  //Compute voronoi diagram with size 700 by 500
  //With a prepared jitter structure (true)


  //Get the raw diagram, for more advanced use
  //This is purely to get information, doesn't change the diagram
  //https://github.com/gorhill/Javascript-Voronoi
  //var diagram = voronoiGetDiagram();
  //console.log(diagram);

  //Get simplified cells without jitter, for more advanced use
  //var normal = voronoiGetCells();
  //console.log(normal);

  //Get simplified cells with jitter, for more advanced use
  //var jitter = voronoiGetCellsJitter();
  //console.log(jitter);


}

function draw() {
  clear()
  seedsColored = seedsColored.map((seed, index) => {
    //seed[2] = color(getRandomColor());
    seed[0] += randomDirection()
    seed[1] += randomDirection()
    seed[2] = color(map(dist(seed[0], seed[1], width / 2, height / 2), 0, 500, 255, 0)
      , map(dist(seed[0], seed[1], width / 2, height / 2), 0, 500, 0, 255)
      , 0);

    return seed;
  })

  for (let seed of seedsColored) {
    voronoiRemoveSite(0)
  }

  voronoiSites(seedsColored)
  voronoi(width, height, true);
  voronoiDraw(0, 0, true, false)

}