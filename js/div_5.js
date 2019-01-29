//background color changed with click
function firstFunction(){
    firstDiv.style.backgroundColor = "#D94A38"
    firstDiv.innerHTML = "<h1>Now I am brick red!</h1>"
}

var firstDiv = document.getElementById("first");
firstDiv.addEventListener("click",firstFunction);

//background color changed with a mouseover
function secondFunction(){
    secondDiv.style.backgroundColor = "#D92A99";
    secondDiv.innerHTML = "<h1>Thank You!</h1>"
}

var secondDiv = document.getElementById("second")
secondDiv.addEventListener("mouseover",secondFunction);

//lowercase letters converted to allcaps when focus is changed
function thirdFunction(){
    thirdDiv.value = thirdDiv.value.toUpperCase();
}

var thirdDiv = document.getElementById("allCaps")
thirdDiv.addEventListener("change",thirdFunction);

//textbox background color is changed when selected
function fourthFunction(){
    fourthDiv.style.background = "green";
}

var fourthDiv = document.getElementById("focusBox")
fourthDiv.addEventListener("focus",fourthFunction);

//counts number of characters and spaces with after each key press
function fifthFunction(){
    document.getElementById("counter").innerHTML = fifthDiv.value.length;
}

var fifthDiv = document.getElementById("comment")
fifthDiv.addEventListener("keyup",fifthFunction);
