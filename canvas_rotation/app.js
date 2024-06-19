const upButton= document.getElementById('up');
const downButton= document.getElementById('down');
const leftButton= document.getElementById('left');
const rightButton= document.getElementById('right');
console.log(upButton);


class Snake {
      width=0;
      heigt=0;
    snakeHeadPosition={
        x:0,
        y:0,
        size:4,
        color:"green"
    };
    snakeFoodPosition={
        x:10,
        y:10,
        size:4,
        color:"yellow"
    };
    canavs=null;
    ctx=null;
    snakeSpeed=0.89;
    snakeSpeedFactor=0.1;
    snakeDirection='right'
    snakeTail=[];
    score=0;

   constructor(width,height){
     this.width=width;
     this.height=height;
     this.snakeHeadPosition.x=(width/2)-this.snakeHeadPosition.size/2;
     this.snakeHeadPosition.y=(height/2)-this.snakeHeadPosition.size/2;
     this.canavs=document.getElementById('app');
     this.ctx=this.canavs.getContext('2d');

   }
   clearCanvas = () => {
    this.ctx.fillStyle='black';
    this.ctx.fillRect(0,0,this.width,this.height);
   }


    createSnakeHead = () => {
        this.ctx.fillStyle=this.snakeHeadPosition.color;
        this.ctx.fillRect(this.snakeHeadPosition.x,this.snakeHeadPosition.y,this.snakeHeadPosition.size,this.snakeHeadPosition.size);
    
    }
    createFood = () => {
        this.ctx.fillStyle=this.snakeFoodPosition.color;
        this.ctx.fillRect(this.snakeFoodPosition.x,this.snakeFoodPosition.y,this.snakeFoodPosition.size,this.snakeFoodPosition.size);
    
    }

    update = () =>{
        // this.clearCanvas();
       
        if(this.snakeDirection==='right'){
            this.snakeHeadPosition.x=this.snakeHeadPosition.x+this.snakeSpeed;
        }
        if(this.snakeDirection==='left'){
            this.snakeHeadPosition.x=this.snakeHeadPosition.x-this.snakeSpeed;
        }
        if(this.snakeDirection==='up'){
            this.snakeHeadPosition.y=this.snakeHeadPosition.y-this.snakeSpeed;
        }
        if(this.snakeDirection==='down'){
            this.snakeHeadPosition.y=this.snakeHeadPosition.y+this.snakeSpeed;
        }
    }
     hello= () => {
        console.log('Hello');
     }

     updateSnakeHeadDirection = (direction) => {
         this.snakeDirection=direction;
     }
     clearFood(){
         this.ctx.clearRect(this.snakeFoodPosition.x,this.snakeFoodPosition.y,this.snakeFoodPosition.size,this.snakeFoodPosition.size);
     }
     
     updateFoodPosition = () => {
         this.snakeFoodPosition.x=Math.floor(Math.random()*(this.width-this.snakeFoodPosition.size));   
         this.snakeFoodPosition.y=Math.floor(Math.random()*(this.height-this.snakeFoodPosition.size));
     }
       
     isFoodCatched= () => {
        let isLeftBoundriesCross = this.snakeHeadPosition.x-this.snakeFoodPosition.size/2<=this.snakeFoodPosition.x+this.snakeFoodPosition.size/2;
        let isRightBoundriesCross = this.snakeHeadPosition.x+this.snakeHeadPosition.size/2>=this.snakeFoodPosition.x-this.snakeFoodPosition.size/2;
        let isTopBoundriesCross = this.snakeHeadPosition.y-this.snakeFoodPosition.size/2<=this.snakeFoodPosition.y+this.snakeFoodPosition.size/2;
        let isBottomBoundriesCross = this.snakeHeadPosition.y+this.snakeHeadPosition.size/2>=this.snakeFoodPosition.y-this.snakeFoodPosition.size/2;
        if(isLeftBoundriesCross && isRightBoundriesCross && isTopBoundriesCross && isBottomBoundriesCross){

            this.snakeHeadPosition.color='red';
            this.clearFood();
            this.updateFoodPosition();
            this.createNewTail();
            this.updateScore();
            this.snakeHeadPosition.color='green';
            this.snakeSpeed= this.snakeSpeed+this.snakeSpeedFactor;
     }
    }

    createNewTail= () =>{
        let newTail={
            x:this.snakeHeadPosition.x,
            y:this.snakeHeadPosition.y,
            size:this.snakeHeadPosition.size,
            color:this.snakeHeadPosition.color
        }
        this.snakeTail.push(newTail);
    }
    updateScore(){
        this.score +=1; 
        this.onScoreChange()
    }

  updateTail = () => {
    if(this.snakeTail.length>0){
        if(this.snakeDirection==='right'){
           this.snakeTail.forEach((element,index) =>{
         if(index===0){
            this.snakeTail[index].x=this.snakeHeadPosition.x-(this.snakeHeadPosition.size/2);
            this.snakeTail[index].y=this.snakeHeadPosition.y;
         }else{
            this.snakeTail[index].x= this.snakeTail[index-1].x-(this.snakeHeadPosition.size/2);
            this.snakeTail[index].y=this.snakeTail[index-1].y;
         }
           })

        }
        if(this.snakeDirection==='left'){
            this.snakeTail.forEach((element,index) =>{
                if(index===0){
                    this.snakeTail[index].x=this.snakeHeadPosition.x+(this.snakeHeadPosition.size/2);
                    this.snakeTail[index].y=this.snakeHeadPosition.y;
                }else{
                    this.snakeTail[index].x= this.snakeTail[index-1].x+(this.snakeHeadPosition.size/2);
                    this.snakeTail[index].y=this.snakeTail[index-1].y;
                }
               })
    
        }
        if(this.snakeDirection==='up'){
            this.snakeTail.forEach((element,index) =>{
               if(index===0){
                this.snakeTail[index].x=this.snakeHeadPosition.x;
                this.snakeTail[index].y=this.snakeHeadPosition.y+(this.snakeHeadPosition.size/2);
               }else{
                this.snakeTail[index].x= this.snakeTail[index-1].x;
                this.snakeTail[index].y=this.snakeTail[index-1].y+(this.snakeHeadPosition.size/2);
               }
               })
            
        }
        if(this.snakeDirection==='down'){
            this.snakeTail.forEach((element,index) =>{
                if(index===0){
                    this.snakeTail[index].x=this.snakeHeadPosition.x;
                    this.snakeTail[index].y=this.snakeHeadPosition.y-(this.snakeHeadPosition.size/2);
                }else{
                    this.snakeTail[index].x= this.snakeTail[index-1].x;
                    this.snakeTail[index].y=this.snakeTail[index-1].y-(this.snakeHeadPosition.size/2);
                }
               })
        }



        this.snakeTail.forEach((element,index) => {
            this.ctx.fillStyle=element.color;
            this.ctx.fillRect(element.x,element.y,element.size,element.size);
            this.ctx.fill()
        })
    }


 
  }
  getBoundries(){
    if(this.snakeHeadPosition.x<0){
        this.snakeHeadPosition.x=this.width;
    }
    if(this.snakeHeadPosition.x>this.width){
        this.snakeHeadPosition.x=0;
    }
    if(this.snakeHeadPosition.y<0){
        this.snakeHeadPosition.y=this.height;
    }
    if(this.snakeHeadPosition.y>this.height){
        this.snakeHeadPosition.y=0;
    }
  }
    
    playGame = () =>{
        this.clearCanvas();
        this.update();
        this.getBoundries()
        this.createSnakeHead();
        this.updateTail()
        this.createFood();
        this.isFoodCatched()
        console.log('Playing game');
        window.requestAnimationFrame(this.playGame);
    }
 
    onScoreChange(){
        console.log('inside Score changed',this.score);
        document.getElementById('score').innerHTML=`Score: ${this.score}`;

        return this.score;
    }
   

}


const snake=new Snake(325,400);

upButton.addEventListener('click', () => {
    console.log('Up button clicked');
    snake.updateSnakeHeadDirection('up');
})

downButton.addEventListener('click', () => {
    console.log('Down button clicked');
    snake.updateSnakeHeadDirection('down');

})

leftButton.addEventListener('click', () => {
    console.log('Left button clicked');
    snake.updateSnakeHeadDirection('left');
})

rightButton.addEventListener('click', () => {
    console.log('Right button clicked');
    snake.updateSnakeHeadDirection('right');
})



snake.playGame();
let score= snake.onScoreChange();

console.log('score get updated',score);