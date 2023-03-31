const day = document.getElementById("daily");
const week = document.getElementById("weekly");
const month = document.getElementById("monthly");
const container = document.querySelector(".container")
const URL = "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json";
let often = "daily"
const cardCounter = 6

function changeState1(){
  often = "daily"
}

function changeState2(){
  often = "weekly"
}

function changeState3(){
  often = "monthly"
}

const fetchData = async () => {
  fetch(URL).then(res=>res.json()).then(data => {

    function getData(id){
  
      const title = data[id].title;
      const dailyCurrent = data[id].timeframes.daily.current;
      const dailyPrevious = data[id].timeframes.daily.previous;
      const weeklyCurrent = data[id].timeframes.weekly.current;
      const weeklyPrevious = data[id].timeframes.weekly.previous;
      const monthlyCurrent = data[id].timeframes.monthly.current;
      const monthlyPrevious = data[id].timeframes.monthly.previous;

      if(often == "daily"){
        let current = dailyCurrent;
        let previous = dailyPrevious;  
        
        const card = document.createElement("div");
        card.classList.add(`card${id}`);
        card.innerHTML =
        `
        <div class="bg">
          <img src="/icons/${id}.png" alt="case" class="icon ${title}" />
        </div>
        <div class="data"> 
          <div class="title">
            <span class="card-name">${title}</span>
            <span class="dots">...</span>
          </div>
          <div class="hr">
            <span class="time">${current} hrs</span>
          </div>
          <div class="last">
            <span class="lastTime">Last week - ${previous} hrs</span>
          </div>
        </div>
        `
          const cardContainer = container.appendChild(card)

      }
  
     else if(often == "weekly"){
        let current = weeklyCurrent;
        let previous = weeklyPrevious; 
        
        const card = document.createElement("div");
        card.classList.add(`card${id}`);
        card.innerHTML =
        `
        <div class="bg">
          <img src="/icons/${id}.png" alt="case" class="icon ${title}" />
        </div>
        <div class="data"> 
          <div class="title">
            <span class="card-name">${title}</span>
            <span class="dots">...</span>
          </div>
          <div class="hr">
            <span class="time">${current} hrs</span>
          </div>
          <div class="last">
            <span class="lastTime">Last week - ${previous} hrs</span>
          </div>
        </div>
        `
          const cardContainer = container.appendChild(card)

      }
     else if(often == "monthly"){
        let current = monthlyCurrent;
        let previous = monthlyPrevious;

        const card = document.createElement("div");
        card.classList.add(`card${id}`);
        card.innerHTML =
        `
        <div class="bg">
          <img src="/icons/${id}.png" alt="case" class="icon ${title}" />
        </div>
        <div class="data"> 
          <div class="title">
            <span class="card-name">${title}</span>
            <span class="dots">...</span>
          </div>
          <div class="hr">
            <span class="time">${current} hrs</span>
          </div>
          <div class="last">
            <span class="lastTime">Last week - ${previous} hrs</span>
          </div>
        </div>
        `
          const cardContainer = container.appendChild(card)

      }
    }
      for (let i = 0; i < cardCounter; i++) {
      getData(i); 
    }
  }
  ).catch(error => console.error(error.message))
}

day.addEventListener("click" , (event) => {
    getDaily();
    changeState1();
})
week.addEventListener("click" , (event) => {
    getWeekly();
    changeState2();
})
month.addEventListener("click" , (event) =>{
    getMonthly();
    changeState3();
})

function getDaily(){
    day.style.color = "white";
    week.style.color = "gray";
    month.style.color = "gray";
    fetchData()  
}

function getWeekly(){
    day.style.color = "gray";
    week.style.color = "white";
    month.style.color = "gray"; 
    fetchData()  
}

function getMonthly(){
    day.style.color = "gray";
    week.style.color = "gray";
    month.style.color = "white";  
    fetchData()  
}

getDaily()
