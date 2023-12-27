const player = {
    age: 0,
    money: 0,
    assets: 0,
    multi: 1,
    salary: 0,
    stockUpgrade: 1000,
    realEstateCost: 90000,
    buttonText1: "Go to school",
    buttonText2: "Buy Multiplier",
    buttonText3: "Go to work",
    buttonText4: "Buy Real Estate"
  };
  
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const ageElement = document.getElementById("age");
  const moneyElement = document.getElementById("money");
  const netElement = document.getElementById("net");
  const multiElement = document.getElementById("multi");
  const salaryElement = document.getElementById("salary");
  const assetsElement = document.getElementById("assets");
  const stockCost = document.getElementById("stockCost");
  
  updateButton1Text();
  
  button1.addEventListener("click", ageYear);
  button2.addEventListener("click", investInStock);
  button3.addEventListener("click", buyRealEstate)

function updateSalaryDisplay() 
    {
        salaryElement.textContent = Math.floor(player.salary * player.multi);
    }

function updateAssetsDisplay() 
    {
        assetsElement.textContent = Math.floor(player.assets);
    }

function updateMultiDisplay() 
    {
        multiElement.textContent = (player.multi.toFixed(2));
    }
function updateAgeDisplay() 
    {
        ageElement.textContent = player.age;
    }
  
function updateMoneyDisplay() 
    {
        moneyElement.textContent = Math.floor(player.money);
    }

function updateNetDisplay() 
    {
        netElement.textContent = Math.floor(player.money + player.assets);
    }
  function updateAllStats(){
    updateAgeDisplay();
    updateMoneyDisplay();
    updateNetDisplay();
    updateAssetsDisplay();
    updateSalaryDisplay();
    updateMultiDisplay();
  }
  
 
  
  
  
    function updateButton2Text()
    {
    button2.textContent = `${player.buttonText2}: $${player.stockUpgrade.toFixed(2)}`;
    }

    function updateButton3Text()
    {
    button3.textContent = `${player.buttonText4}: $${player.realEstateCost.toFixed(2)}`;
    }

  function updateButton1Text() {
    if (player.age < 18) {
      button1.textContent = `${player.buttonText1} (${18 - player.age} years left)`;
    } else {
      button1.textContent = player.buttonText1;
    }
  }
  
  function ageYear() {
    player.age += 1;
    
    if (player.age === 18) {
      button1.textContent = "Go to work";
      player.salary = 8000;
      player.money = 1000;
      updateButton3Text();
      updateMoneyDisplay();
    } else if (player.age > 18 /*&& player.age < 30*/) {
      button1.textContent = player.buttonText3;
      player.money += player.salary * player.multi;
    }
  
    if (player.age >= 18) {
      button2.textContent = `${player.buttonText2}: $${player.stockUpgrade.toFixed(2)}`;
    }
    updateMoneyDisplay();
    updateAgeDisplay();
    updateNetDisplay();
    updateAllStats();
  }
  
  function investInStock() {
    if (player.age >= 18 && player.money >= player.stockUpgrade) {
      player.money -= player.stockUpgrade;
      player.stockUpgrade *= 1.25;
      player.multi += 0.05;
    }
    updateAllStats();
    updateMoneyDisplay();
    updateNetDisplay();
    updateButton2Text();
  }

  function buyRealEstate(){
    if (player.age >= 18 && player.money >= player.realEstateCost){
        player.money-=player.realEstateCost;
        player.assets+=player.realEstateCost;
        player.multi+=0.15;
        player.realEstateCost*=1.15;
    }
    else{
        console.log("Not enough money")
    }
    updateAllStats();
    updateMoneyDisplay();
    updateNetDisplay();
    updateButton3Text();
    updateMultiDisplay();
  }