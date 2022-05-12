console.log("loading main.js file")



let button = document.getElementById("submit")
button.addEventListener("click", function(){
    fetch("https://randomuser.me/api").then(function(response){
    //do this when the results come back
    console.log("processing fetch results")
    return response.json()
    
}).then(function(json){
    console.log("My name is", json.results[0].name["first"])
})
})

let button1 = document.getElementById("submit1")
button1.addEventListener("click", function(){
    fetch("https://ip-fast.com/api/ip/?format=json&location=True").then(function(response){
    //do this when the results come back
    console.log("processing fetch results")
    return response.json()
    
}).then(function(json){
    console.log("My IP address is", json.ip)
})
})




