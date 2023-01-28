

function update() {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        console.log(this.responseText);
    });
    oReq.open("POST", "/api/drivingTests/update");
    oReq.send();
}