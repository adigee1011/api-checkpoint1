console.log("loading main.js file")


//make a reuqest to //https.//randomuser.me/api
// and that service will send a response bac
// and we want to do something with that response
//may be just print it on the console


// we really have 3 'programs' 
// sending the html and javascript files to the browser
// chrome displaying the html as a nice webpage and executing the main.js file
// randomwuser.me's servers send us the response {json object}



//some code here...
console.log("before fetch")
//let promise = fetch("https://randomuser.me/api") //10 seconds to respond 

let button = document.getElementById("submit")
button.addEventListener("click", function(){
    fetch("https://randomuser.me/api").then(function(response){
    //do this when the results come back
    console.log("processing fetch results")
    return response.json()
    
}).then(function(json){
    console.log("the json payload is", json.results[0].name)
})
})




