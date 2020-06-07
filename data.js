let getData = () =>{
 const promise = axios.get('https://randomuser.me/api/');
return promise.then((data) =>{
  return data
})
}

let PostDATA = (token,data) =>{
const promise = axios.post("https://api.fake.rest/189bf93b-4d78-4f00-86ac-76d87cfccbd1/task/add")
return promise.then((data) =>{
  return data
})
}
