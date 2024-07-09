
var turn = "X"

function turn(){
    return "X" ? "O" : "X"
}

checkwin(){
    win= [
        {1,2,3},
        {4,5,6},
        {7,8,9},
        {1,4,7},
        {2,5,8},
        {3,6,9},
        {1,5,9},
        {3,5,7},
    ]
}

function changeturn(){
    var boxtext =  document.querySelector(".boxtext");
    if(boxtext.innerText === ""){
        turn();
        checkwin();
    }
}