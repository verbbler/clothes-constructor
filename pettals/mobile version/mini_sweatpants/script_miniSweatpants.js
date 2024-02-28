const quiz = [
	{name:"Модель",buttons:["Велосипедки","Удлинённые","Удлинённые с резинками"]},
	{name:"Штанины",buttons:["Без подгибки","С подгибкой","С оборкой"]},
	{name:"Обработка края",buttons:["Обмётан","Шов"]},
	{name:"Пояс",buttons:["Узкий","Широкий"]},
    {name:"Оборка по талии", buttons:["Есть", "Нет"]},
    {name:"Длина",buttons:["Короткая","Удлиненная"]},
    {name:"Положение швов",buttons:["Внутри","Снаружи"]},
	{name:"Размер",buttons:["50","56","62","68","74","80","86"]},
	{name:"Материал",buttons:["Материал1","Материал2","Материал3","Материал4"]},
]

let page = 0;
let page_history= [];
let choises = [];

function Startup()
{
	SetQuiz(page);
}

function MainIMG()
{
    let parentEl = document.getElementById("images");
    parentEl.innerHTML = "<img src='https://i.imgur.com/13PaPli.png'>" // велосипедки
}
	
function SetQuiz(num = 0)
{
	
	let head = document.getElementById("head");
	let buttons = document.getElementById("buttons");
	let pages = document.getElementById("pages");

	head.innerHTML = quiz[num].name;
	pages.innerHTML = (num + 1) + " / " + quiz.length;

	let new_buttons = "";
	for(let i in quiz[num].buttons)
	{
		let value = quiz[num].buttons[i];
		new_buttons += '<button id="button' + i + '" class="button" onclick="ButtonPressed(this.id)">' + value + '</button><br>';
	}

	buttons.innerHTML = new_buttons;
	
	MainIMG();
	SetPictures();
	mini_pictures();
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
	choises.push(choise);

	switch(value){
		case "Удлинённые с резинками":
			page = 3;
			break;
		case "Без подгибки":
			page = 3;
			break;
		case "С подгибкой":
			page = 3;
			break;	
	    case "Нет":
			page = 7;
			break;	
		default:
			page++;
			break;
	}
	page_history.push(page);

	if(page > quiz.length - 1)
	{
		SetResults();
	}
	else
	{
		SetQuiz(page);
		MainIMG();
		SetPictures();
		mini_pictures();
	}
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

	if(document.getElementById("results").style.display = "flex") document.getElementById("quiz").style.display = "block", document.getElementById("results").style.display = "none";

	SetQuiz(page);
}
function SetPictures()
{
	const appImages = [img1, img2];
	    let appImg1 = document.getElementById("img1");
		    appImages[0].innerHTML = "<img src='https://i.imgur.com/Q9YlJ7X.png'>" // штанины
		let appImg2 = document.getElementById("img2");
			appImages[1].innerHTML = "<img src='https://i.imgur.com/oSqmQHk.png'>" // резинки
	
	if( choises.length == 0) appImg1.style.display = "none", appImg2.style.display = "none";
	    for(let choise of choises){
		    switch(choise.value){
		    case "Удлинённые с резинками":
		    appImg1.style.display = "block";
			appImg2.style.display = "block";
			break;
		    case "Удлинённые":
			appImg1.style.display = "block";
			appImg2.style.display = "none";
			break;
		    case "Велосипедки":
			appImg1.style.display = "none";
			appImg2.style.display = "none";
			break;

	        }
	    }
}

function mini_pictures()
{
	let mini0 = document.getElementById("mini0");
        mini0.innerHTML = "<img src='https://i.imgur.com/13PaPli.png'>" // велосипедки
	let mini1 = document.getElementById("mini1");
		 mini1.innerHTML = "<img src='https://i.imgur.com/Q9YlJ7X.png'>" // штанины
	let mini2 = document.getElementById("mini2");
		mini2.innerHTML = "<img src='https://i.imgur.com/oSqmQHk.png'>" // резинки	
}