const svgTS:HTMLElement = document.getElementById('svgId');

type coordinatesType = {
    x: number,
    y: number
}
 
const startTS:coordinatesType = {
     x: 0,
     y: 0
}
 
const endTS:coordinatesType = {
     x: 0,
     y: 0
}
 
   
document.addEventListener('mousedown', (e:MouseEvent) => {
       startTS.x = e.pageX;
       startTS.y = e.pageY
})
   
document.addEventListener('mouseup', (e:MouseEvent) => {
     endTS.x=e.pageX;
     endTS.y = e.pageY
     const settingsCircle:Array<number> = calculateCircleTS(startTS.x, startTS.y, endTS.x, endTS.y)
     svgTS.insertAdjacentHTML("afterbegin", `<circle cx=${settingsCircle[0]} cy=${settingsCircle[0]} r=${settingsCircle[0]} fill='red'/>`)
   })
   
const calculateCircleTS=(startX:number, startY:number, endX:number, endY:number):Array<number> => {
     const cx:number = (startX+endX)/2;
     const cy:number = (startY+endY)/2;
     const r:number = Math.sqrt(Math.pow((cx-startX),2)+Math.pow((cy-startY),2))
     return [cx,cy,r]
}



  
  
  

 
