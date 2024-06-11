// pie_canvas
console.log("pie_chart");
const canvas = document.getElementById('pie');
let dimension = {
    width:window.innerWidth,
    height:window.innerHeight,
    acceptRatio:window.innerWidth/window.innerHeight,
    radius:Math.min(window.innerWidth,window.innerHeight)/4
}


class PieChart {
    #width=0;
    #height=0;
    #radius=0;
    #data=[];
    #color=[];
    ctx=null;
    canvasElement=null;
    constructor(canvasElement,width,height,radius,color,data){
        this.#width=width;
        this.#height=height;
        this.#radius=radius;
        this.#data=data;
        this.#color=color;
        this.canvasElement=canvasElement;
        this.ctx= canvasElement.getContext('2d'); 
    }
    drawGraph(){
        //get the tota value 
        //always clear the canavs before drawing a new canvas 
        
        this.canvasElement.width=this.#width;
        this.canvasElement.height=this.#height;
        this.ctx.clearRect(0,0,this.#width,this.#height);
        const _midPoint = [this.#width/2, this.#height/2];
        const _totaArea = this.#data.reduce((a,b) => a+b);
        let   _startAngle=0;
        const _totalAngle=Math.PI*2;
        //start angle will update with end angle for next pie;
        for(let i=0;i<this.#data.length;i++){
            let _fracttion = this.#data[i]/_totaArea;
            //endAngle= totalAngle*fraction;
            let _endAngle = _startAngle+_totalAngle*_fracttion;

           //create a arc path
           this.ctx.fillStyle=this.#color[i];
           this.ctx.beginPath();
           this.ctx.moveTo(_midPoint[0],_midPoint[1]);
           this.ctx.arc(_midPoint[0],_midPoint[1],this.#radius,_startAngle,_endAngle,false);
           this.ctx.lineTo(_midPoint[0],_midPoint[1]);
           this.ctx.fill();
           this.ctx.closePath();
           this.ctx.strokeWidth='1px';
           this.ctx.stroke();

           //update end angle 

           _startAngle= _endAngle;


        }


    }

    setDimension(width,height,radius){
       this.#width=width;
       this.#height=height;
       this.#radius=radius;
       this.drawGraph();
    }
    setRadius(radius){
       this.#radius=radius;
       this.drawGraph();
    }

    setData(data){
       this.#data=data;
       this.drawGraph();
    }
    setColor(color){
      this.#color=color;
      this.drawGraph();
    }
    getProperties(){
        return {
            width:this.#width,
            height:this.#height,
            radius:this.#radius,
            data:this.#data,
            color:this.#color
        }
    }
    getContext(){
        return this.ctx;
    }
    getCanvas(){
        return this.canvasElement;
    }

}

let pieChart= new PieChart(canvas,dimension.width,dimension.height,dimension.radius,['red','green','yellow','pink'],[30,10,40,25])
pieChart.drawGraph();
pieChart.setColor(['blue','green','yellow','red']);
console.log(pieChart.getProperties())

window.addEventListener('resize',() => {
    dimension.width= window.innerWidth;
    dimension.height=window.innerHeight;
    dimension.acceptRatio=window.innerWidth/window.innerWidth;
    dimension.radius=Math.min(window.innerWidth,window.innerHeight)/4;
    console.log('resize',dimension)
    pieChart.setDimension(dimension.width,dimension.height,dimension.radius)
})