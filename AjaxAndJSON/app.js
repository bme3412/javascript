document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status === 200) {
            console.log(this.responseText)
        }

    }
    xhr.onreadystatechange = function() {   
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText)
    }
    }

    xhr.send();


    // ReadtState values
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready

    
    // HTTP status
    // 200: "ok"
    // 403: "Forbidden"
    // 404: "Not Found"
}