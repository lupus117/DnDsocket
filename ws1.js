// client.js
 
const WebSocket = require('ws');
const url = 'ws://localhost:8080';
const connection = new WebSocket(url);
var stdin = process.openStdin();


connection.onopen = () => {
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`);
}
 
connection.onmessage = (e) => {
  console.log(e.data);
}

connection.onclose = function(event) {
  console.log('connection closed');
};
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    //console.log("you entered: [" + 
      //  d.toString().trim() + "]");
      if(connection.OPEN){
        connection.send(d.toString().trim());
      }
  });
