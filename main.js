//we set the constants to work with the DOM
const day = document.getElementById("daily");
const week = document.getElementById("weekly");
const month = document.getElementById("monthly");
const container = document.querySelector(".container")
const URL = "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json";//URL TO GET THE DATA
let often = "daily" //INITIAL VALUE
const cardCounter = 6

//FUNCTIONS TO CHANGE STATES OF THE TIMEFRAME
function changeState1(){
  often = "daily"
}

function changeState2(){
  often = "weekly"
}

function changeState3(){
  often = "monthly"
}
console.log(container.childNodes)
const fetchData = async () => {//GETTING AND MANAGING THE DATA
  fetch(URL).then(res=>res.json()).then(data => {

   

    function getData(id){//FUNCTION TO CONSTRUCT THE CARDS WITH THE GIVEN DATA
  
      //ASSIGNING THE DATA TO CONSTANTS
      const title = data[id].title;
      const dailyCurrent = data[id].timeframes.daily.current;
      const dailyPrevious = data[id].timeframes.daily.previous;
      const weeklyCurrent = data[id].timeframes.weekly.current;
      const weeklyPrevious = data[id].timeframes.weekly.previous;
      const monthlyCurrent = data[id].timeframes.monthly.current;
      const monthlyPrevious = data[id].timeframes.monthly.previous;

      if(often == "daily"){//MANAGING THE STATES OF THE TIMEFRAME
        let current = dailyCurrent;
        let previous = dailyPrevious;  
        
        const card = document.createElement("div");//CREATING THE CARDS
        card.classList.add(`card${id}`);
        card.innerHTML =
        `
        <div class="bg">
          <img src="./icons/${id}.png" alt="case" class="icon ${title}" />
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
          const cardContainer = container.appendChild(card)//ADDING THE CARDS AS A CHILD OF THE CONTAINER

      }
  
     else if(often == "weekly"){//MANAGING THE STATES OF THE TIMEFRAME
        let current = weeklyCurrent;
        let previous = weeklyPrevious; 
        
        const card = document.createElement("div");//CREATING THE CARDS
        card.classList.add(`card${id}`);
        card.innerHTML =
        `
        <div class="bg">
          <img src="./icons/${id}.png" alt="case" class="icon ${title}" />
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
          const cardContainer = container.appendChild(card)//ADDING THE CARDS AS A CHILD OF THE CONTAINER

      }
     else if(often == "monthly"){//MANAGING THE STATES OF THE TIMEFRAME
        let current = monthlyCurrent;
        let previous = monthlyPrevious;

        const card = document.createElement("div");//CREATING THE CARDS
        card.classList.add(`card${id}`);
        card.innerHTML =
        `
        <div class="bg">
          <img src="./icons/${id}.png" alt="case" class="icon ${title}" />
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
          const cardContainer = container.appendChild(card)//ADDING THE CARDS AS A CHILD OF THE CONTAINER

      }
    }
      for (let i = 0; i < cardCounter; i++) {//GET THE DATA OF ALL THE ELEMENTS 
        
        let childs = container.childNodes

        if (childs.length > 8){//remove previous cards
          for(j = i + 8; j > 2 ; j--){
            container.removeChild(childs[j])
          }
        }
        getData(i);
    }

  }
  ).catch(error => console.error(error.message))
}

day.addEventListener("click" , (event) => {//ADDING AN EVENT LISTENER TO EXECUTE FUNCTIONS
    getDaily();
    changeState1();
})
week.addEventListener("click" , (event) => {//ADDING AN EVENT LISTENER TO EXECUTE FUNCTIONS
    getWeekly();
    changeState2();
})
month.addEventListener("click" , (event) =>{//ADDING AN EVENT LISTENER TO EXECUTE FUNCTIONS
    getMonthly();
    changeState3();
})

function getDaily(){//VISUALY CHANGING THE STATE OF THE DOM
    day.style.color = "white";
    week.style.color = "gray";
    month.style.color = "gray";
   fetchData()  
}

function getWeekly(){//VISUALY CHANGING THE STATE OF THE DOM
    day.style.color = "gray";
    week.style.color = "white";
    month.style.color = "gray"; 
    fetchData()  
}

function getMonthly(){//VISUALY CHANGING THE STATE OF THE DOM
    day.style.color = "gray";
    week.style.color = "gray";
    month.style.color = "white"; 
    fetchData()  
}


getDaily()//WHEN THE PAGE LOADS THE STATE WILL BE DAILY
