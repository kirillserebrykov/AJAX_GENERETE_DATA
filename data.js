let getData = () =>{
 const promise = axios.get('https://randomuser.me/api/');
return promise.then((data) =>{
  return data
})
}