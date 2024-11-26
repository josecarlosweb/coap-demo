const coap = require('coap');

const remoteServerUri = "coap://coap.me:5683/large";

const request = coap.request(remoteServerUri);
request.on('response', function(response){
  response.pipe(process.stdout);

  response.on('end', function(){
    process.exit(0);
  });

});

request.end();