let modalWrapper = document.querySelector(".superior-modal");
let backProject = document.querySelector(".project");
let closeModal = document.querySelector(".modal-close");
backProject.addEventListener("click", function(){
    modalWrapper.style.display = "block";
})
closeModal.addEventListener("click", function(){
    modalWrapper.style.display = "none";
    document.querySelector(".modalTwo").style.display = "none";
    document.querySelector(".modalThree").style.display = "none";
    document.querySelector(".modalThree").style.display = "none";
    document.querySelector(".begin-c").style.border = "2px solid whitesmoke";
    document.querySelector(".second-c").style.border = "2px solid whitesmoke";
    document.querySelector(".third-c").style.border = "2px solid whitesmoke";
    document.querySelector(".first-c").style.border = "2px solid whitesmoke";
    document.querySelector("#box1").checked = "";
    document.querySelector("#box2").checked = ""; 
    document.querySelector("#box3").checked = "";
    document.querySelector("#box4").checked = "";
})

let firstBox = document.querySelector("#box1");
let secondBox = document.querySelector("#box2");
let thirdBox = document.querySelector("#box3");
let fourthBox = document.querySelector("#box4");


firstBox.addEventListener("click", function(){
    alert("Go is great")
    document.querySelector(".begin-c").style.border = "2px solid hsl(176, 50%, 47%)";
    document.querySelector(".second-c").style.border = "2px solid whitesmoke";
    document.querySelector(".third-c").style.border = "2px solid whitesmoke";
    document.querySelector(".first-c").style.border = "2px solid whitesmoke";
})

secondBox.addEventListener("click", function(){
    let modalTwo = document.querySelector(".modalTwo");
    modalTwo.style.display = "flex";
    document.querySelector(".first-c").style.border = "2px solid hsl(176, 50%, 47%)";
    document.querySelector(".second-c").style.border = "2px solid whitesmoke";
    document.querySelector(".third-c").style.border = "2px solid whitesmoke";
    document.querySelector(".begin-c").style.border = "2px solid whitesmoke";
    let modalThree = document.querySelector(".modalThree");
    modalThree.style.display = "none";
    let modalFour = document.querySelector(".modalFour");
    modalFour.style.display = "none";
    document.querySelector(".twenty-five-dollars").value = "";
})



thirdBox.addEventListener("click", function(){
    let modalThree = document.querySelector(".modalThree");
    modalThree.style.display = "flex";
    document.querySelector(".second-c").style.border = "2px solid hsl(176, 50%, 47%)";
    document.querySelector(".third-c").style.border = "2px solid whitesmoke";
    document.querySelector(".begin-c").style.border = "2px solid whitesmoke";
    document.querySelector(".first-c").style.border = "2px solid whitesmoke";
    let modalFour = document.querySelector(".modalFour");
    modalFour.style.display = "none";
    let modalTwo = document.querySelector(".modalTwo");
    modalTwo.style.display = "none";
    document.querySelector(".seventy-five-dollars").value = "";
})



fourthBox.addEventListener("click", function(){
    let modalFour = document.querySelector(".modalFour");
    modalFour.style.display = "flex";
    document.querySelector(".third-c").style.border = "2px solid hsl(176, 50%, 47%)";
    document.querySelector(".first-c").style.border = "2px solid whitesmoke";
    document.querySelector(".second-c").style.border ="2px solid whitesmoke";
    document.querySelector(".begin-c").style.border = "2px solid whitesmoke";

    let modalTwo = document.querySelector(".modalTwo");
    modalTwo.style.display = "none";
    let modalThree = document.querySelector(".modalThree");
    modalThree.style.display = "none";
    document.querySelector(".two-hundred-dollars").value = "";
})




document.querySelector(".p").addEventListener("click", function(){
    let twnetyDollars = document.querySelector(".twenty-five-dollars");
    if(twnetyDollars.value == ""){
        alert ("please, enter an anamount");
    }else{
        document.querySelector(".thank-you-wrapper").style.display = "block"
        document.querySelector(".superior-modal").style.display = "none"
        document.querySelector(".modalTwo").style.display = "none";
        document.querySelector(".first-c").style.border = "whitesmoke";
        document.querySelector("#box2").checked = ""; 
        document.querySelector(".twenty-five-dollars").value = "";
    }
})



document.querySelector(".q").addEventListener("click", function(){
    let seventyFiveDollars = document.querySelector(".seventy-five-dollars");
    if(seventyFiveDollars.value == ""){
        alert ("please, enter an anamount"); 
    }else{
    document.querySelector(".thank-you-wrapper").style.display = "block"
    document.querySelector(".superior-modal").style.display = "none"
    document.querySelector(".modalThree").style.display = "none";
    document.querySelector(".second-c").style.border = "whitesmoke";
    document.querySelector("#box3").checked = ""; 
    document.querySelector(".seventy-five-dollars").value = "";
    }
})


document.querySelector(".r").addEventListener("click", function(){
    let twoHundredDollars = document.querySelector(".two-hundred-dollars");
    if(twoHundredDollars.value == ""){
        alert ("please, enter an anamount"); 
    }else{
        document.querySelector(".thank-you-wrapper").style.display = "block"
        document.querySelector(".superior-modal").style.display = "none"
        document.querySelector(".modalFour").style.display = "none";
        document.querySelector(".third-c").style.border = "whitesmoke";
        document.querySelector("#box4").checked = ""; 
        document.querySelector(".two-hundred-dollars").value = "";
    }
})
document.querySelector(".got-it").addEventListener("click", function(){
    document.querySelector(".thank-you-wrapper").style.display = "none"
})



function myFunction(x) {
      x.classList.toggle("change");
    }
    function myFunction(x) {
      x.classList.toggle("change");
    }
    let mobileNav = document.querySelector(".mobile-menu");

document.querySelector(".container").addEventListener("click", function(){
    mobileNav.classList.toggle("l");
})

document.querySelector(".cta-pledge").addEventListener("click", function(){
    document.querySelector(".superior-modal").style.display = "block";
    document.querySelector(".down").href = "#navigation"
    document.querySelector(".body").style.height = "100vh";
})

document.querySelector(".pledge2").addEventListener("click", function(){
    document.querySelector(".superior-modal").style.display = "block";
    document.querySelector(".downn").href = "#navv"
    document.querySelector(".y").style.height = "100vh";
})

document.querySelector(".pledge3").addEventListener("click", function(){
    document.querySelector(".superior-modal").style.display = "block";
    document.querySelector(".downnn").href = "#navigations"
    document.querySelector(".yy").style.height = "100vh";
})