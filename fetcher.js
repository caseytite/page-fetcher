const request = require("process");

let website = process.argv[2];
let path = process.argv[3];

const request = require("request");
request("website", (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.

  fs.writeFile(path, body, (err) => {
    if (error) {
      console.error(err);
      return;
    }
    //fs write file in here
  });

  const fs = require("fs");

  const content = "Some content!";
  //file written successfully
});
