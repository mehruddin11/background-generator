var body = document.getElementById("generate");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var css = document.querySelector("h3");

const setGradeint = () =>{  
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ","
	+color3.value
	+ ")";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input" , setGradeint);
color2.addEventListener("input" , setGradeint);
color3.addEventListener("input" ,setGradeint);