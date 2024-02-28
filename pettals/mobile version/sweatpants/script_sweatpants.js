

const quiz = [
	{name:"МОДЕЛЬ",buttons:[{name:"велосипедки",img:"https://i.imgur.com/kY9xqEy.jpg"},{name:"удлинённые", img: "https://i.imgur.com/kY9xqEy.jpg"},{name:"удлинённые с резинками", img: "https://i.imgur.com/kY9xqEy.jpg"}]},
	{name:"ШТАНИНЫ",buttons:[{name:"без подгибки", img:"https://i.imgur.com/kY9xqEy.jpg"},{name:"с подгибкой", img:"https://i.imgur.com/kY9xqEy.jpg"},{name:"с оборкой", img:"https://i.imgur.com/kY9xqEy.jpg"}]},
	{name:"ОБРАБОТКА КРАЯ",buttons:[{name:"обмётан", img:"https://i.imgur.com/kY9xqEy.jpg"},{name:"шов", img:"https://i.imgur.com/kY9xqEy.jpg"}]},
	{name:"ПОЯС",buttons:[{name:"узкий", img:"https://i.imgur.com/kY9xqEy.jpg"},{name:"широкий", img:"https://i.imgur.com/kY9xqEy.jpg"}]},
	{name:"РАЗМЕР",buttons:[{name:"92"},{name:"98"},{name:"104"},{name:"110"},{name:"116"},{name:"122"},{name:"128"}]},
	{name:"МАТЕРИАЛ",buttons:[{name:"материал1"},{name:"материал2"},{name:"материал3"},{name:"материал4"}]},
]

let page = 0;
let page_history = [];
let choise_selected = false;
let choises = [];

function Startup()
{
	SetQuiz(page);
}

function SetQuiz(num = null)
{
	if(num == null) num = page;
	choise_selected = false;
	let head = document.getElementById("head");
	let buttons = document.getElementById("buttons");
	let pages = document.getElementById("pages");

	head.innerHTML = quiz[num].name;
	pages.innerHTML = (num + 1) + " / " + quiz.length;

	
	let new_buttons = "";
	for(let i in quiz[num].buttons)
	{
		let value = quiz[num].buttons[i];
		let image = value.img;
		if(image != undefined)
		{
			new_buttons += '<button id="button' + i + '" class="button" style="background-image:url(' + value.img + ')" onclick="ButtonPressed(this.id)">' + value.name + '</button><br>';
		}
		else
		{
			new_buttons += '<button id="button' + i + '" class="button" onclick="ButtonPressed(this.id)">' + value.name+ '</button><br>';
		}

		// if (page == 5) document.getElementsByClassName("button").style.color = "black";
		// else if (page == 6) document.getElementsByClassName("button").style.color = "black";
	}
	buttons.innerHTML = new_buttons;
	
	SetPictures();
}


function SetResults()
{	
	document.getElementById("quiz").style.display = "none";
	document.getElementById("results").style.display = "flex";
	
	let results = [];
	for(let i in choises)
	{
	    let choise = choises[i];
		results += "<div>" + choise.name + ": " + choise.value + "</div>";
	}	

	document.getElementById("results").innerHTML = results;	
}

function ButtonPressed(id)
{
	let value = document.getElementById(id).innerHTML;
	let choise = {};
	choise.name = quiz[page].name;
	choise.value = value;

	if(!choise_selected) 
	{
		switch(value){
			case "удлинённые с резинками":
				page = 3;
				break;
			case "без подгибки":
				page = 3;
				break;
			case "с подгибкой":
				page = 3;
				break;	
			default:
				page++;
				break;
		}
		page_history.push(page);
		choise_selected = true;
		choises.push(choise);
	}
	else
	{
		choises[choises.length - 1] = choise;
	}

	let buttons = document.getElementsByClassName("button");
	for(let entry of buttons)
	{
		console.log(entry);
		entry.classList.remove("selected");
	}
	document.getElementById(id).classList.add("selected");
}

function GoBack()
{
	if(page_history.length >= 2)
	{
		page_history.pop();
		page = page_history[page_history.length - 1];
		choises.pop();
	}
	else
	{
		page = 0;
		choises = [];
		page_history = [];
	}

	// if(document.getElementById("results").style.display = "flex") document.getElementById("quiz").style.display = "block", document.getElementById("results").style.display = "none";

	SetQuiz(page);
}

function goShop()
{
	if(choises.length != page-2) document.getElementById("toShop").style.display = "none", document.getElementById("noShop").style.display = "block", setTimeout(Reverse, 2000);
	else if(choises.length = page-2) document.getElementById("toShop").style.display = "none", document.getElementById("noShop").style.display = "block", setTimeout(Reverse, 2000);
	else if(page = 6)document.getElementById("toShop").style.display = "block";
	function Reverse()
	{
		document.getElementById("toShop").style.display = "block", document.getElementById("noShop").style.display = "none";
	}
}
function GoNext()
{
	SetQuiz();
	SetPictures();
}

function SetPictures()
{
	let parentEl = document.getElementById("images");
    parentEl.innerHTML = "<img src='https://i.imgur.com/13PaPli.png'>" // велосипедки

	const appImages = [img1, img2];
	    let appImg1 = document.getElementById("img1");
		    appImages[0].innerHTML = "<img src='https://i.imgur.com/Q9YlJ7X.png'>" // штанины
		let appImg2 = document.getElementById("img2");
			appImages[1].innerHTML = "<img src='https://i.imgur.com/oSqmQHk.png'>" // резинки

	let icon = document.getElementById("shopIcon");
	icon.innerHTML = "<img src='https://i.imgur.com/a1O1JxJ.png'>"
	
	if( choises.length == 0) appImg1.style.display = "none", appImg2.style.display = "none";
	    for(let choise of choises){
		    switch(choise.value){
		    case "удлинённые с резинками":
		    appImg1.style.display = "block";
			appImg2.style.display = "block";
			break;
		    case "удлинённые":
			appImg1.style.display = "block";
			appImg2.style.display = "none";
			break;
		    case "велосипедки":
			appImg1.style.display = "none";
			appImg2.style.display = "none";
			break;

	        }
	    }
}
