
const element = document.querySelector(".switch");
const basicCard = document.querySelectorAll(".button")[0];
const professionalCard = document.querySelectorAll(".button")[1];
const masterCard = document.querySelectorAll(".button")[2];


// Toggle Switch
let number = 0;

element.addEventListener("click",changeToggle);

function changeToggle(e){
    number +=1;

    if(number % 2 != 0 || number === 1 ){
        document.querySelector(".switch").style.justifyContent = "flex-end";
        document.querySelector("#basic").innerHTML = '<span>&#36;</span>19.99'
        document.querySelector("#professional").innerHTML = '<span>&#36;</span>24.99'
        document.querySelector("#master").innerHTML = '<span>&#36;</span>39.99'

    } else {
        document.querySelector(".switch").style.justifyContent = "flex-start";
        document.querySelector("#basic").innerHTML = '<span>&#36;</span>199.99'
        document.querySelector("#professional").innerHTML = '<span>&#36;</span>249.99'
        document.querySelector("#master").innerHTML = '<span>&#36;</span>399.99'
    }

    

};


// Seleceted Card Activation 


basicCard.addEventListener('click',activationOne);

function activationOne(e){

    basicCard.parentElement.className = "card-unit active";
    professionalCard.parentElement.className = "card-unit";
    masterCard.parentElement.className = "card-unit";

    e.preventDefault();

}

professionalCard.addEventListener('click',activationTwo);

function activationTwo(e){

    basicCard.parentElement.className = "card-unit";
    professionalCard.parentElement.className = "card-unit active";
    masterCard.parentElement.className = "card-unit";

    e.preventDefault();

}

masterCard.addEventListener('click',activationThree);

function activationThree(e){

    basicCard.parentElement.className = "card-unit";
    professionalCard.parentElement.className = "card-unit";
    masterCard.parentElement.className = "card-unit active";

    e.preventDefault();
}



// activeElement.forEach(function(element){

//     element.addEventListener('click',addActive);

//     function addActive(e){

//         element.parentElement.className = "card-unit active";

//     }

// })
