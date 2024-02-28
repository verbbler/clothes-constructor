function Start() {
  RenderHead();
  RenderButtons();
  Pictures();
}

let choisess = [];

function RenderHead() {
  const headSkirt = ["МОДЕЛЬ", "ДЛИНА", "ПОЯС", "ДОПОЛНИТЕЛЬНАЯ ФИКСАЦИЯ ПОЯСА", "ТИП ШНУРКА", "ТИП ФИКСАТОРА", "БОКОВЫЕ КАРМАНЫ", "НАКЛАДНЫЕ КАРМАНЫ СПЕРЕДИ", "ЗАДНИЙ КАРМАН", "ОБОРКА ПО НИЗУ", "ОБРАБОТКА КРАЯ", "РАЗМЕР", "МАТЕРИАЛ"];

  let head = document.getElementById("headd");
  let newHead = "";
  for (i in headSkirt) {
    newHead += '<div id = "head' + i + '"class = "head">' + headSkirt[i] + '</div>';
  }
  head.innerHTML = newHead;
}

function RenderButtons() {
  let button = document.getElementById("buttonss");
  let newButton = "";

  const modelBut = ["трапеция", "колокол"];
  for (i in modelBut) {
    newButton += '<div id = "modelButton' + i + '"class = "modelButton" onclick="ButtonPressed(this.id)">' + modelBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const lengthBut = ["короткая", "средняя", "длинная"];
  for (i in lengthBut) {
    newButton += '<div id = "lengthButton' + i + '"class = "lengthButton" onclick="ButtonPressed(this.id)">' + lengthBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const beltBut = ["на резинке", "на резинке с оборкой"];
  for (i in beltBut) {
    newButton += '<div id = "beltButton' + i + '"class = "beltButton" onclick="ButtonPressed(this.id)">' + beltBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const fixBeltBut = ["нет", "шлёвки", "шнурок", "фиксатор"];
  for (i in fixBeltBut) {
    newButton += '<div id = "fixBeltButton' + i + '"class = "fixBeltButton" onclick="ButtonPressed(this.id)">' + fixBeltBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const laceBut = ["из основной ткани", "плетёный"];
  for (i in laceBut) {
    newButton += '<div id = "laceButton' + i + '"class = "laceButton" onclick="ButtonPressed(this.id)">' + laceBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const retainerBut = ["в цвет ткани", "белый", "прозрачный"];
  for (i in retainerBut) {
    newButton += '<div id = "retainerButton' + i + '"class = "retainerButton" onclick="ButtonPressed(this.id)">' + retainerBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const sidePocketBut = ["нет", "да"];
  for (i in sidePocketBut) {
    newButton += '<div id = "sidePocketButton' + i + '"class = "sidePocketButton" onclick="ButtonPressed(this.id)">' + sidePocketBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const frontPocketBut = ["нет", "да"];
  for (i in frontPocketBut) {
    newButton += '<div id = "frontPocketButton' + i + '"class = "frontPocketButton" onclick="ButtonPressed(this.id)">' + frontPocketBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const backPocketBut = ["нет", "один", "два"];
  for (i in backPocketBut) {
    newButton += '<div id = "backPocketButton' + i + '"class = "backPocketButton" onclick="ButtonPressed(this.id)">' + backPocketBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const bottomBut = ["нет", "одинарная", "двойная"];
  for (i in bottomBut) {
    newButton += '<div id = "bottomButton' + i + '"class = "bottomButton" onclick="ButtonPressed(this.id)">' + bottomBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const edgeBut = ["обмётка", "шов"];
  for (i in edgeBut) {
    newButton += '<div id = "edgeButton' + i + '"class = "edgeButton" onclick="ButtonPressed(this.id)">' + edgeBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const sizeBut = ["86", "92", "98", "104", "110", "116", "122", "128"];
  for (i in sizeBut) {
    newButton += '<div id = "sizeButton' + i + '"class = "sizeButton" onclick="ButtonPressed(this.id)">' + sizeBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  const materialBut = ["материал1", "материал2", "материал3"];
  for (i in materialBut) {
    newButton += '<div id = "materialButton' + i + '"class = "materialButton" onclick="ButtonPressed(this.id)">' + materialBut[i] + '</div>';
  }
  button.innerHTML = newButton;

  // ButtonPressed();
  SetButtons();
  notActive();
}

// function ButtonPressed(id) {
//   let head = document.getElementById("head").innerHTML;
//   let value = document.getElementById(this.id).innerHTML;
  
//   let choise = {};
//   choise.name = head;
//   choise.value = value;


//   choises.push(choise);
// }

function SetButtons() {
  let model = document.getElementById("head0");
  model.addEventListener("click", () => {
    model.classList.add("active");
    document.getElementById("modelButton0").style.display = "flex", document.getElementById("modelButton1").style.display = "flex";
  })

  let length = document.getElementById("head1");
  length.addEventListener("click", () => {
    length.classList.add("active");
    document.getElementById("lengthButton0").style.display = "flex", document.getElementById("lengthButton1").style.display = "flex",
    document.getElementById("lengthButton2").style.display = "flex";
  })

  let belt = document.getElementById("head2");
  belt.addEventListener("click", () => {
    belt.classList.add("active");
    document.getElementById("beltButton0").style.display = "flex", document.getElementById("beltButton1").style.display = "flex";
  })

  let fixBelt = document.getElementById("head3");
  fixBelt.addEventListener("click", () => {
    fixBelt.classList.add("active");
    document.getElementById("fixBeltButton0").style.display = "flex", document.getElementById("fixBeltButton1").style.display = "flex",
    document.getElementById("fixBeltButton2").style.display = "flex", document.getElementById("fixBeltButton3").style.display = "flex";
  })

  let lace = document.getElementById("head4");
  lace.addEventListener("click", () => {
    lace.classList.add("active");
    document.getElementById("laceButton0").style.display = "flex", document.getElementById("laceButton1").style.display = "flex";
  })

  let retainer = document.getElementById("head5");
  retainer.addEventListener("click", () => {
    retainer.classList.add("active");
    document.getElementById("retainerButton0").style.display = "flex", document.getElementById("retainerButton1").style.display = "flex", 
    document.getElementById("retainerButton2").style.display = "flex";
  })

  let sidePocket = document.getElementById("head6");
  sidePocket.addEventListener("click", () => {
    sidePocket.classList.add("active");
    document.getElementById("sidePocketButton0").style.display = "flex", document.getElementById("sidePocketButton1").style.display = "flex";
  })
  
  let frontPocket = document.getElementById("head7");
  frontPocket.addEventListener("click", () => {
    frontPocket.classList.add("active");
    document.getElementById("frontPocketButton0").style.display = "flex", document.getElementById("frontPocketButton1").style.display = "flex"
  })

  let backPocket = document.getElementById("head8");
  backPocket.addEventListener("click", () => {
    backPocket.classList.add("active");
    document.getElementById("backPocketButton0").style.display = "flex", document.getElementById("backPocketButton1").style.display = "flex",
    document.getElementById("backPocketButton2").style.display = "flex";
  })

  let bottom = document.getElementById("head9");
  bottom.addEventListener("click", () => {
    bottom.classList.add("active");
    document.getElementById("bottomButton0").style.display = "flex", document.getElementById("bottomButton1").style.display = "flex",
    document.getElementById("bottomButton2").style.display = "flex";
  })

  let edge = document.getElementById("head10");
  edge.addEventListener("click", () => {
    edge.classList.add("active");
    document.getElementById("edgeButton0").style.display = "flex", document.getElementById("edgeButton1").style.display = "flex";
  })

  let size = document.getElementById("head11");
  size.addEventListener("click", () => {
    size.classList.add("active");
    document.getElementById("sizeButton0").style.display = "flex", document.getElementById("sizeButton1").style.display = "flex",
    document.getElementById("sizeButton2").style.display = "flex", document.getElementById("sizeButton3").style.display = "flex",
    document.getElementById("sizeButton4").style.display = "flex", document.getElementById("sizeButton5").style.display = "flex",
    document.getElementById("sizeButton6").style.display = "flex", document.getElementById("sizeButton7").style.display = "flex";
  })

  let material = document.getElementById("head12");
  material.addEventListener("click", () => {
    material.classList.add("active");
    document.getElementById("materialButton0").style.display = "flex", document.getElementById("materialButton1").style.display = "flex",
    document.getElementById("materialButton2").style.display = "flex";
  })

  // let mood = document.getElementsByClassName("constructorImage")

  // document.onclick = function (e) {
  //  if (e.target.className != "constructorImage") {
  //   document.getElementById("modelButton0").style.display = "none";
  //   document.getElementById("modelButton1").style.display = "none";
  //  };
  // };

}

function notActive()
{
  document.getElementById("fixBeltButton0").addEventListener("click", () => {
    document.getElementById("head4").classList.add("notActive"),
    document.getElementById("head5").classList.add("notActive");
  })
  document.getElementById("fixBeltButton1").addEventListener("click", () => {
    document.getElementById("head4").classList.add("notActive"),
    document.getElementById("head5").classList.add("notActive");
  })
   document.getElementById("fixBeltButton2").addEventListener("click", () => {
    document.getElementById("head5").classList.add("notActive");
  })
  document.getElementById("fixBeltButton3").addEventListener("click", () => {
    document.getElementById("head4").classList.add("notActive");
  })
  document.getElementById("sidePocketButton1").addEventListener("click", () => {
    document.getElementById("head7").classList.add("notActive");
  })
  document.getElementById("bottomButton0").addEventListener("click", () => {
    document.getElementById("head10").classList.add("notActive");
  })
  document.getElementById("bottomButton1").addEventListener("click", () => {
    document.getElementById("head10").classList.add("notActive");
  })
}

function goShoping() {
  document.getElementById("shop").style.display = "flex",
    document.getElementById("toCart").style.display = "none", document.getElementById("price").style.display = "none", setTimeout(Reverse, 1500);

  function Reverse() {
    document.getElementById("price").style.display = "flex", document.getElementById("toCart").style.display = "flex", document.getElementById("shop").style.display = "none";
  }
}

function Pictures() {
  let heart = document.getElementById("heartt");
  heart.innerHTML = "<img src='https://svgshare.com/i/wuC.svg'>" // иконка сердечко 

  let iconCart = document.getElementById("toCart");
  iconCart.innerHTML = "<img src='https://svgshare.com/i/wv3.svg'>" // иконка корзина

}