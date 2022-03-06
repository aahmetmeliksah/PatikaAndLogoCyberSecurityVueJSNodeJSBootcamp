const XMLHttpRequest = require("xhr2");
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhttp.responseText);
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();
