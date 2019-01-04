
/*
   */

onmessage = function(msg) {
    console.log("Inside: ", msg.data);
    
    var req = new XMLHttpRequest(); 
    req.open('GET', msg.data, false);   
    req.send(null);  

    postMessage(req.responseText);
}
