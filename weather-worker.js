
/*var req = new XMLHttpRequest();  
req.open('GET', 'http://www.mydomain.com/', false);   
req.send(null);  
if(req.status == 200)  
   dump(req.responseText);
   */

onmessage = function(msg) {
    console.log(msg);
    postMessage("Received message: " + msg);
}
