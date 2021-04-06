// fetch the api
let lists = document.getElementById('list');
let img = document.getElementsByTagName('img')
let checkbox = document.getElementById('switch');
console.log( checkbox);
let root = document.querySelector(':root')
console.log(typeof root);
let body = document.getElementById('white')
console.log(body);
let links = document.getElementsByTagName('a');
console.log(links);
let eachCard = document.getElementById('card');
//let body = document.getElementByTagName('body')
//let card = document.getElementByClassName('card');
//console.log(card);
async function getData(){
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  console.log(response); //object
  
 const data = await response.json()
  console.log( data);//object
   data.forEach(e => {
      let eachName = e.name;
      let regions =e.region
      let flags = e.flag;
      let population = e.population
      let capital = e.capital 
    //add to document
    let li = document.createElement('li');
    li.setAttribute('id', 'listItem');
    li.innerHTML=`
    <div id="card">
    <a href="countries.html?name=${eachName}">
    <img src="${flags}" alt="">
    <h2><b>${eachName}</b></h2>
    <p id="data">Population:${population}</p>
    <p id="data">Capital:${capital}</p>
        <p id="data">Region:${regions}</p>
        </a>
      </div>`
     
    lists.appendChild(li)
})
}
getData();
// filter through the array

// dark mode
checkbox.addEventListener('click', (e) =>{
  if (e.target.checked) {
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark');
  }
  //for the text


})

  for (let i = 0; i < links.length; i++) {
    links.addEventListener('click',(e)=>{
      console.log(e.target.parentElement);
    })
    
  }
  

