var eggs = 0;
var page = window

//cpwr
var cp_price = 150
var cp_pwr = 1

//ac
var ac_price = 300
var ac_cps = 0

const para = document.getElementById("para");
const btn = document.getElementById("btn");
const cpwr = document.getElementsByClassName("cpwr")[0]
const ac = document.getElementsByClassName("cps")[0]
const stats_cpwr = document.getElementById("stats_cpwr");

function loadData() {
  eggs = JSON.parse(localStorage.getItem("clicks"));
  if(eggs != null){
    para.innerHTML = `Clicks: ${eggs}`
  }else{
    para.innerHTML = `Clicks: 0`
  }
};

function eraseData() {
  var answer = prompt("Are You Sure? This Will Clear ALL Data.", "y/n")
  switch(answer) {
    case("y"):
      eggs = localStorage.setItem("clicks", 0)
      para.innerHTML = "Clicks: 0"  
    case("n"):
      return
  }
}

btn.addEventListener("click", function() {
  eggs += cp_pwr;
  para.innerHTML = "Clicks: " + eggs;
  localStorage.setItem("clicks", eggs)
});

cpwr.addEventListener("click", function() {
  if(eggs === cp_price){
    eggs -= cp_price;
    para.innerHTML = "Clicks: " + eggs;
    cp_pwr += 1
    stats_cpwr.innerHTML = "Clickpower: " + cp_pwr;

  }
});

ac.addEventListener("click", function() {
  if(eggs >= ac_price){
    eggs -= ac_price;
    ac_cps += 2
    setInterval(() => {
      eggs += ac_cps;
      para.innerHTML = "Clicks: " + eggs;
      localStorage.setItem("clicks", eggs)
    }, 1000); 
  }
})

document.onkeydown=function(e){
  var e = e || page.event;
  if(e.ctrlKey && e.altKey && e.key === 'm') {
    let ans = page.prompt(`Hello, You've reached the admin menu\nEnter a number [1-1]`)
    if(ans = '1'){
      let total = page.prompt(`Enter Clicks Needed.`)
      eggs += parseInt(total);
      para.innerHTML = "Clicks: " + eggs;
    }
  }
};

document.addEventListener('keyup', keycmd, false);
