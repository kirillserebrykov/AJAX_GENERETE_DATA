let api = "https://jsonplaceholder.typicode.com"/* DOM */
let i = document.querySelector("#out")
let g = document.querySelector("#gender")
let p = document.querySelector("#phone")
let n = document.querySelector("#nat")
let e = document.querySelector("#email")
let password = document.querySelector("#password")
let login = document.querySelector("#login")
let status = document.querySelector("#status")
let c = document.querySelector("#c")
/* DOM/ */
//вшаю на button функцию которая берёт данные из promise
let button = document.querySelector("#button").onclick = () =>{
	  const promise = getData()
	  promise
	  .then(getCallback)
	  .catch(() => c.style.background = "#C9132D" )
	  
	
}
//проверка статуса сити
let time = () =>{
setInterval(() =>{
	const promise = getData()
	  promise.then(Interval)
	  .catch(() => c.style.background = "#C9132D" )
}, 11000);}
//функция которая работает с DOM и добавляет значения из DLL левела 
function getCallback (data) {
  	let DataAPI = data.data.results[0]
  
    
	e.innerHTML = "email: " + DataAPI.email
	n.innerHTML = "nat: " +DataAPI.nat 
	g.innerHTML = "gender: " +DataAPI.gender
	p.innerHTML = "phone: " +DataAPI.phone
	i.innerHTML = "name:"  +DataAPI.id.name
  	password.innerHTML = "password:"+ DataAPI.login.password
  	login.innerHTML = "login:" + DataAPI.login.username
  	re
  	//провека чему равен name если "" тогда name присвоить undefined  
      	if (DataAPI.id.name == ""){
        i.innerHTML = "name:"  + "undefined"
      }
     
     if (data.status == "200"){
     	  c.style.background = "#3BCD27"
     }
     

  }

//если чтото пошло не так и вместо resolved()  вызвался  reject()----\\  
const Interval = (data) =>{
	 if (data.status == "200"){
     	  c.style.background = "#3BCD27"
     }
}

console.log("dev_2")
