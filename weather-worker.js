onmessage = function(msg) {
    console.log("Inside: ", msg.data);
    
    var req = new XMLHttpRequest(); 
    req.open('GET', msg.data, false); 
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            postMessage(req.responseText);
        }
    }; 

    req.send(null);  
}
