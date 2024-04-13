
const button = document.querySelector('makeCircle');
let containerDim = document.querySelector('.container').getBoundingClientRect();


function makeCircle() {

    const circle = document.createElement("div");
    circle.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';    
    circle.classList.add('circle');
    circle.style.left = containerDim.left + Math.random() * (containerDim.width - 50) + "px";
    circle.style.top = containerDim.top + Math.random() * (containerDim.height - 50) + "px";
    document.querySelector('.container').appendChild(circle);
}