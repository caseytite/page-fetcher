const request = require("request");
const fs = require("fs");
// example.edu
let website = process.argv[2];
let path = process.argv[3];

request(website, (error, response, content) => {
  if (error) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.
    return;
  }

  fs.writeFile(path, content, (error) => {
    if (error) {
      console.error(err);
      console.log("no path found");
      return;
    }
    //fs write file in here
    console.log(
      `successfully downloaded and saved ${content.length} bytes to ${path}`
    );
  });

  //file written successfully
});

//---
