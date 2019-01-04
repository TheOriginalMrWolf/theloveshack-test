
/*
   */

onmessage = function(msg) {
    console.log(msg);
    
    var req = new XMLHttpRequest(); 
    req.open('GET', msg.data, false);   
    req.send(null);  

    if(req.status == 200)  
       postMessage(req.responseText);
}
