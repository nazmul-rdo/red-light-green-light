const continerNode = document.getElementById("continer");
let clickCount = 0;
let fNode, sNode;
let myArr = []

for (let x = 0; x < 16; x++) {
    const createDiv = document.createElement("button");
    createDiv.className = "box";
    createDiv.id = "box";

    let divNodeCreate = continerNode.appendChild(createDiv);
    // console.log(divNodeCreate)
    divNodeCreate.addEventListener("click", () => {

        if (fNode) {
            fNode.classList.remove("green-light")
            fNode.classList.add("red-light");
        }
        if (sNode) {
            sNode.classList.remove("red-light");
        }

        sNode = fNode;
        fNode = createDiv;
        fNode.classList.add('green-light');

        clickCount++;
        createDiv.innerText = clickCount;
        // createDiv.disabled = true;
    })
}






// //pactice  width sir

// let clickCount = 0;
// let fristNode, secondNode;
// let nodeArray = [];

// function clickCoundHandling(id) {

//     if (!nodeArray.includes(id)) {
//         if (fristNode) {
//             fristNode.classList.remove("green-light")
//             fristNode.classList.add("red-light");
//         }
//         if (secondNode) {
//             secondNode.classList.remove("red-light");
//         }

//         secondNode = fristNode;
//         fristNode = document.getElementById(id);
//         fristNode.classList.add('green-light');

//         clickCount++;
//         fristNode.innerText = clickCount;


//         nodeArray.push(id);
//     }

// }