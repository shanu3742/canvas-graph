

class EdgeChart {
   
    #chartList = ['candle','volume'];
    #subplotList =['volume'];
    #overLayList=[];
    #maxCharts= 8;

    constructor(){

    }

    drawChart(){

    }
    addSubPlot(subPlot){

        if(this.#chartList.length>this.#maxCharts){
            if(!this.#chartList.includes(subPlot)){
                this.#subplotList= [...this.#subplotList,subPlot];
                this.#chartList= [...this.#chartList,subPlot];
            }else{
                //alert
                alert("Subplot already added");
            }
        }else{
            //alert 
            alert("Maximum Charts reached");
        }
        
    }

    addOverLay(overLay){
        if(this.#chartList.length>this.#maxCharts){
            if(!this.#chartList.includes(overLay)){
                this.#overLayList= [...this.#overLayList,subPlot];
                this.#chartList= [...this.#chartList,subPlot];
            }else{
                //alert
                alert("overlay already added");
            }
        }else{
            //alert 
            alert("Maximum Charts reached");
        }
        
    }
}

