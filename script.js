var groceries = document.getElementsByClassName("groceries")[0];
var pen = document.getElementById("penStyle");
var inputItem = document.getElementById("inputItem");
var listItems = document.getElementById("listItems");

pen.addEventListener("click", function(){
	listItems.innerHTML ="";
})


inputItem.addEventListener("keypress", function(event){
	if(event.code === "Enter")
		addNewItem();
})

function addNewItem(){
	var h2 = document.createElement("h2");
	h2.innerHTML = "- " + inputItem.value;

	h2.addEventListener("click", function(){
		h2.style.textDecoration ="line-through";
	})

	listItems.insertAdjacentElement("beforeend", h2);
	inputItem.value = "";
}



