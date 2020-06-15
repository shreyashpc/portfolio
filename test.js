// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "15px";
  } else {
    document.getElementById("header").style.fontSize = "30px";
  }
}


//Filter
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".row").children;

for(let i = 0; i<filterButtons.length; i++){
	filterButtons[i].addEventListener("click", function(){
		for(let j = 0; j<filterButtons.length; j++){
			filterButtons[j].classList.remove("active")
		}
		this.classList.add("active");
		// console.log(this.getAttribute("data-target"))
		const target=this.getAttribute("data-target")
		for (let k = 0; k<items.length; k++){
			items[k].style.display="none";
			if(target==items[k].getAttribute("data-id"))
			{
				items[k].style.display="block";
			}
			if (target=="all") {
				items[k].style.display="block";
			}
		}
	})
}

