let api = "https://jsonplaceholder.typicode.com"
let i = document.querySelector("#out")
let g = document.querySelector("#gender")
let p = document.querySelector("#phone")
let n = document.querySelector("#nat")
let e = document.querySelector("#email")
let password = document.querySelector("#password")
let login = document.querySelector("#login")
let status = document.querySelector("#status")
let c = document.querySelector("#c")

let button = document.querySelector("#button").onclick = () =>{
	  const promise = getData()
	  promise
	  .then(getCallback)
	  .catch(() => c.style.background = "#C9132D" )
	  
	
}

let time = () =>{
setInterval(() =>{
	const promise = getData()
	  promise.then(Interval)
	  .catch(() => c.style.background = "#C9132D" )
}, 11000);}
time()
function getCallback (data) {
  	let DataAPI = data.data.results[0]
  
    
	e.innerHTML = "email: " + DataAPI.email
	n.innerHTML = "nat: " +DataAPI.nat 
	g.innerHTML = "gender: " +DataAPI.gender
	p.innerHTML = "phone: " +DataAPI.phone
	i.innerHTML = "name:"  +DataAPI.id.name
  	password.innerHTML = "password:"+ DataAPI.login.password
  	login.innerHTML = "login:" + DataAPI.login.username
      	if (DataAPI.id.name == ""){
        i.innerHTML = "name:"  + "undefined"
      }
     
     if (data.status == "200"){
     	  c.style.background = "#3BCD27"
     }
     

  }


const Interval = (data) =>{
	 if (data.status == "200"){
     	  c.style.background = "#3BCD27"
     }
}