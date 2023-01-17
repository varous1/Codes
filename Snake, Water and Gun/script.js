let user= prompt("Enter S,W or G")
let cpuI= Math.floor(Math.random() * 3);
let cpu=["S","W","G"][cpuI]
const match=(user,cpu)=>{
 if(user===cpu){
   return "NOBODY";
 }
  else if(user==="S"&& cpu==="W"){
    return "user";
  }
  else if(user==="S"&& cpu==="G"){
    return "cpu";
  }
  else if(user==="W"&& cpu==="G"){
    return "user";
  }
  else if(user==="G"&& cpu==="S"){
    return "user";
  }
  else if(user==="W"&& cpu==="S"){
    return "cpu";
  }
  else if(user==="G"&& cpu==="W"){
    return "cpu";
  }
}
let result=match(user,cpu);
document.write(`User: ${user}<br> CPU: ${cpu} <br> Winner is: ${result.toUpperCase()}`)
