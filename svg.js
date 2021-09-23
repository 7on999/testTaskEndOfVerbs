const svg = document.getElementById('svgId');

const start = {
    x: 0,
    y: 0
}
 
const end = {
    x: 0,
    y: 0
 }
 
document.addEventListener('mousedown',(e)=>{
    start.x = e.pageX;
    start.y = e.pageY
   })
   
document.addEventListener('mouseup',(e)=>{
    end.x = e.pageX;
    end.y = e.pageY
    const parametresCircle = calculateCircle(start.x,start.y,end.x,end.y)
    svg.insertAdjacentHTML("afterbegin", `<circle cx=${parametresCircle[0]} cy=${parametresCircle[1]} r=${parametresCircle[2]} fill='red'/>`)

   })
   
const calculateCircle=(startX, startY, endX, endY)=>{
     const cx = (startX+endX)/2;
     const cy = (startY+endY)/2;
     const r = Math.sqrt(Math.pow((cx-startX),2)+Math.pow((cy-startY),2))
     return [cx,cy,r]
   }



  
  
  

 