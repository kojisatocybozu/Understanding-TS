"use strict";
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: "Hi there!" });
}
sendRequest("Send this!", (response) => {
    console.log(response);
    return true;
});
