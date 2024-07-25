const containerEl = document.querySelector(".container");

let carrers = ["Student","Web Dev", "Programer" , "Instrutor"];
let carrersIndex = 0;
let sliceIndex = 0;


updatetext();

function updatetext(){
    sliceIndex++;
    containerEl.innerHTML = `<h1>I am ${carrers[carrersIndex].slice(0,1) === "I" ? "an" : "a"} ${carrers[carrersIndex].slice(0, sliceIndex)}</h1>`;
    if((carrers[carrersIndex].length+1) === sliceIndex){
        sliceIndex = 0;
        carrersIndex++;
    }
    if(carrersIndex === carrers.length){
        carrersIndex = 0;
    }
    setTimeout(updatetext,400);
}