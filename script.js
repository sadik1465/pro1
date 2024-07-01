let button = document.querySelectorAll(".btn");
let msgcont = document.querySelector(".msg-win");
let winnermsg = document.querySelector("#contwin");
let resetgame =  document.querySelector(".resetbtn");
let newgamebro = document.querySelector(".newgame");

const newbaby  = () =>{
    turn0 = true;
    enableboxes();
    
     
}
resetgame.addEventListener("click",newbaby);
const enableboxes = ()=>{
    for (let boi of button){
        boi.disabled=false;
        boi.innerText="";
        msgcont.classList.add("msg-win");


    }
}

let turn0 = true;
const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

button.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==true){
            box.innerText="O";
            turn0=false;

        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
    checkwin();
    })

})

const disable=()=>{

    for( boxes of button){
        boxes.disabled = true;
    }
}




let checkwin = () =>{
    for( let pattern of win){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(button[pattern[0]].innerText,button[pattern[1]].innerText,button[pattern[2]].innerText);


        let pos1 =button[pattern[0]].innerText;
        let pos2 =button[pattern[1]].innerText;
        let pos3 =button[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if (pos1 == pos2 && pos2 == pos3){
        winnermsg.innerText=`congrats winner is ${pos1}`;
        msgcont.classList.remove("msg-win");
        disable();

        }
    }


    }

}