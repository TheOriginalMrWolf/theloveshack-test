onmessage = function(msg) {
    console.log("Inside: ", msg.data);
    
    /*
    var req = new XMLHttpRequest(); 
    req.open('GET', msg.data, false); 
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            postMessage(req.responseText);
        }
    }; 
    req.send();
    */

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://theoriginalmrwolf.github.io/theloveshack-test/index.html");
    
    xhr.onload = function () {
        console.log("onload...");
        postMessage(xhr.responseText);
    };
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("onreadystatechange...");
            postMessage(xhr.responseText);
        }
    };

    xhr.send();     
}
