const http = reqUIRE('http');

const httpserver = http.createServer((req,res) => {
  console.log("we have received a request");
});

httpserver.listen(8080 , () => console.log(`My server is listening on port 8080`))
