const canvas = document.getElementById('c1');
const c = canvas.getContext('2d');
const unitName = 32;
const g = new Image()
const f = new Image()
let a
let dir

//in order to load image, use new Image() to call constructor, then say object name.src = path
g.src = 'ground.png'
f.src = 'food.png'

// function hour(){
//    a = new Date().getHours()
//    console.log(a)
// }

let snake = []
snake[0] = {
    x: 320-32,
    y: 320,
}
let food = {
  x: Math.floor(Math.random() * 17) * 32,
  y: Math.floor(Math.random() * 15) * 32
}

function draw(){
    c.drawImage(g,0,0)

    for(var i=0;i<snake.length;i+=1){
      a = new rect(snake[i].x,snake[i].y,'red')
    }

    let spx = snake[0].x
    let spy = snake[0].y

    c.drawImage(f,food.x,food.y)

    if(dir == 'left'){
      spx-=32
    }

    if(dir == 'right'){
      spx+=32
    }

    if(dir == 'top'){
      spy-=32
    }

    if(dir == 'bottom'){
      spy+=32
    }

    let nh = {
      x: spx,
      y: spy,
    }

    snake.unshift(nh)

    if(food.x==spx&&food.y==spy){
      food = {
        x: Math.floor(Math.random() * 17) * 32,
        y: Math.floor(Math.random() * 15) * 32
      }
    }
    else{
      snake.pop()
    }
  
}

let callFunction = setInterval(draw,100)

function rect(x,y,color){
    this.x=x;
    this.y=y;
    this.width=32;
    this.height=32;
    this.color=color;

    c.fillStyle = this.color
    c.fillRect(this.x,this.y,this.width,this.height)
}

document.addEventListener("keydown", function(data){
  dir
  if (data.keyCode === 37){
    dir = 'left'
  }
  // snake[0].x+=32
  if (data.keyCode === 38){
    dir = 'top'
  }
  // snake[0].y-=32
  if (data.keyCode === 39){
    dir = 'right'
  }
  // snake[0].x+=32
  if (data.keyCode === 40){
    dir = 'bottom'
  }
  // snake[0].y-=32
});