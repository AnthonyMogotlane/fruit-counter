//DOM buttons reference
const appleAdd = document.querySelector(".apple-add");
const appleRemove = document.querySelector(".apple-remove");
const orangeAdd = document.querySelector(".orange-add");
const orangeRemove = document.querySelector(".orange-remove");
const pearAdd = document.querySelector(".pear-add");
const pearRemove = document.querySelector(".pear-remove");

//instances of the FruitCounter
let appleCounter = FruitCounter(JSON.parse(localStorage.getItem("appleCounter")));
let orangeCounter = FruitCounter(JSON.parse(localStorage.getItem("orangeCounter")));
let pearCounter = FruitCounter(JSON.parse(localStorage.getItem("pearCounter")));

//apple widget event listeners
////add to counter
addEvent(appleAdd, appleCounter, "appleCounter", ".apple-container");
////remove to counter
removeEvent(appleRemove, appleCounter, "appleCounter", ".apple-container");

//orange widget event listeners
////add to counter
addEvent(orangeAdd, orangeCounter, "orangeCounter", ".orange-container");
////remove to counter
removeEvent(orangeRemove, orangeCounter, "orangeCounter", ".orange-container");

//pear widget event listeners
////add to counter
addEvent(pearAdd, pearCounter, "pearCounter", ".pear-container");
////remove to counter
removeEvent(pearRemove, pearCounter, "pearCounter", ".pear-container");

//add event function
function addEvent(addButton, fruitInstance, storageName, containerClass) {
    addButton.addEventListener("click", () => {
        fruitInstance.increase();
        localStorage.setItem(`${storageName}`, JSON.stringify(fruitInstance.count()))
        countersTemplate(`${containerClass}`, fruitInstance.count());
    })
}

//remove even function
function removeEvent(removeButton, fruitInstance, storageName, containerClass) {
    removeButton.addEventListener("click", () => {
        fruitInstance.decrease();
        localStorage.setItem(`${storageName}`, JSON.stringify(fruitInstance.count()))
        countersTemplate(`${containerClass}`, fruitInstance.count());
    })
}

//counter template function
const countersTemplate = (theClass, theCount) => {
    let template = document.querySelector(".counters-content").innerHTML;
    let templateFunction = Handlebars.compile(template);
    let counters = {theCounters: theCount}
  
    document.querySelector(theClass).innerHTML = templateFunction(counters);
}
//initial state of the counters
countersTemplate(".apple-container", appleCounter.count());
countersTemplate(".orange-container", orangeCounter.count());
countersTemplate(".pear-container", pearCounter.count());