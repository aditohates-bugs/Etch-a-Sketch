
const btn2 = document.querySelector("#btn2");
const btn1 = document.querySelector("#btn1");
const container= document.querySelector("#container");
const btn3 = document.querySelector("#btn3");

let boxes;
let sq=16;
let cond =false;

function rgbgen(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
};




function makeGrid(sq){
    for(let i=0; i<sq*sq; i++){
        const div = document.createElement("div");
        div.classList.add("box")
        container.appendChild(div);
    }
};

makeGrid(sq);

function useAbleGrid(){
    boxes=document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.style.width = `${100/sq}%`;
        box.style.height = `${100/sq}%`;
        box.addEventListener("mouseover", (e) =>{
            if(!cond){
                box.style.backgroundColor = "black";
            }
            else{
                box.style.background = rgbgen();
            }

        });
    });
};

useAbleGrid();

btn2.addEventListener("click", (event) => {
    event.preventDefault();
    let sqq = prompt("Select number of squares*square for grid(2-100)");
    let key= true;
    do{
    if(sqq>=2 && sqq <=100){
        key=false;
    }
    else{
        sqq =prompt("Incorrect enter size of grid again(2-100):")
    }
    }while(key);
    sq = sqq;
    boxes.forEach((box)=>{
        box.remove();
    });

    makeGrid(sq);
    useAbleGrid();

});

btn1.addEventListener("click", (event)=>{
    event.preventDefault();
    boxes.forEach((box)=>{
        box.remove();
    });
    makeGrid(sq);
    useAbleGrid();
});

btn3.addEventListener("click", (e)=>{
    event.preventDefault();
    
    if(e.ctrlkey){
        cond = false;
    }
    else{
        cond = true;
    }
});