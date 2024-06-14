const upButton= document.getElementById('up');
const downButton= document.getElementById('down');
const leftButton= document.getElementById('left');
const rightButton= document.getElementById('right');
console.log(upButton);

upButton.addEventListener('click', () => {
    console.log('Up button clicked');
})

downButton.addEventListener('click', () => {
    console.log('Down button clicked');

})

leftButton.addEventListener('click', () => {
    console.log('Left button clicked');
})

rightButton.addEventListener('click', () => {
    console.log('Right button clicked');
})

class Snake {
      width=0;
      heigt=0;
    snakeHeadPosition={
        x:0,
        y:0,
        size:4,
        color:"green"
    };
    canavs=null;
    ctx=null;

   constructor(width,height){
     this.width=width;
     this.height=height;
     this.snakeHeadPosition.x=(width/2)-this.snakeHeadPosition.size/2;
     this.snakeHeadPosition.y=(height/2)-this.snakeHeadPosition.size/2;
     this.canavs=document.getElementById('app');
     this.ctx=this.canavs.getContext('2d');
     snakeSpeed=0.1;
     snakeSpeedFactor=0.01;
     snakeDirection='right'

   }
   clearCanvas(){
    this.ctx.fillStyle='black';
    this.ctx.fillRect(0,0,this.width,this.height);
   }

    createSnakeHead(){
        this.ctx.fillStyle=this.snakeHeadPosition.color;
        this.ctx.fillRect(this.snakeHeadPosition.x,this.snakeHeadPosition.y,this.snakeHeadPosition.size,this.snakeHeadPosition.size);
    
    }

    update(){
        this.clearCanvas();
        this.snakeSpeed= this.snakeSpeed+this.snakeSpeedFactor;
    }

    updateSnakeHeadDirection(directionType){
         
    }


}


const snake=new Snake(325,400);

const playGame = () => {
    snake.clearCanvas();
    snake.createSnakeHead();
}

playGame()