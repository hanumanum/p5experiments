//Պլան
//1․ Նկարել բեքգրաունդ
//2․ Նկարել քառակուսի կենտրոնում
//3․ Ասել փոփոխականների մասին
//4․ Նկարագրել քառակուսին որպես օբյեկտ
//5. Գծել ըստ այդ օբյեկտի, ասել հատկանիշների մասին
//6. Օբյեկտը ստեղծող ֆունկցիա սարքել, սկզբից սովորական ապա պատահական դիրքում, գույնով և չափերով, 
//6.1 ասել, որ նախապես ստեղծված ֆունկցիա ուեննք, որը պատահական  
//7․ Անիմացնել քառակուսին պատերի հետ բախումներով հանդերձ
//8. Խոսել զանգածների մասին
//9․ Դնել մեկ օբյեկտը զանգվածի մեջ
//10. Ցույց տալ, թե ինչպես է զանգածից վերցվում մեր ուզած օբյեկտը
//11․ Ցույց տալ for ցիկլը, զանգվածը լցնելու և նկարելու համար
//12․ Խաղալ պարամետրերի հետ, խոսել խաղի անհրաժեշտության մասին
//13․ Դնել բլենդ մոդը EXCLUSION, ավելացնել քանակը
//14․ Ամփոփել

const W = 1000
const H = 800
const RECTS = []
const COUNT = 200

function setup() {
  createCanvas(W, H)
  rectMode(CENTER)
  blendMode(EXCLUSION)
  noStroke()

  for (let i = 0; i < COUNT; i++) {
    RECTS.push({
      x: W / 2,
      y: H / 2,
      size: random(50, 100),
      color: getRandomColor(),
      directionx: random(-3, 3),
      directiony: random(-3, 3),
    })
  }
}

function draw() {
  clear()
  background("black")

  for (let i = 0; i < COUNT; i++) {
    fill(RECTS[i].color)
    rect(RECTS[i].x, RECTS[i].y, RECTS[i].size, RECTS[i].size)
    RECTS[i].x += RECTS[i].directionx
    RECTS[i].y += RECTS[i].directiony

    if (RECTS[i].x <= 0 || RECTS[i].x >= W) {
      RECTS[i].directionx *= -1
    }

    if (RECTS[i].y <= 0 || RECTS[i].y >= H) {
      RECTS[i].directiony *= -1
    }

  }
}


function getRandomColor() {
  //const colors = ["#fd00ff","#fdff00","#00ff38","#00f9ff","#3c00ff"]
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
  //return color(random(255), random(255), random(255))
}


function mouseClicked() {
  RECTS.unshift({
    x: mouseX,
    y: mouseY,
    size: random(0, 100),
    color: getRandomColor(),
    directionx: random(-2, 2),
    directiony: random(-2, 2),
    rotation: random(-100, 100),
    rotationVelocity: random(-1, 1)
  })

}