const svgTS:HTMLElement = document.getElementById('svgId');

type coordinatesType = {
    x: number,
    y: number
}
 
const startTS:coordinatesType = {
     x:0,
     y:0
}
 
const endTS:coordinatesType = {
     x:0,
     y:0
}
 
   
document.addEventListener('mousedown', (e:MouseEvent) => {
       start.x = e.pageX;
       start.y = e.pageY
})
   
document.addEventListener('mouseup', (e:MouseEvent) => {
     end.x=e.pageX;
     end.y = e.pageY
     const settingsCircle:Array<number> = calculateCircleTS(start.x, start.y, end.x, end.y)
    svg.insertAdjacentHTML("afterbegin", `<circle cx=${settingsCircle} cy=${settingsCircle} r=${settingsCircle} fill='red'/>`)
   })
   
const calculateCircleTS=(startX:number, startY:number, endX:number, endY:number):Array<number> => {
     const cx:number = (startX+endX)/2;
     const cy:number = (startY+endY)/2;
     const r:number = Math.sqrt(Math.pow((cx-startX),2)+Math.pow((cy-startY),2))
     return [cx,cy,r]
}



  
  
  

 