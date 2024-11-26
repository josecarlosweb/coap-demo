const coap = require('coap');

const server = coap.createServer();

let currentTemperature = null;

const routes = {
  '/temperature': {
    PUT: (req, resp) => {
      currentTemperature = parseFloat(req.payload.toString());
      console.log(`Temperatura recebida ${currentTemperature} ºC`);
      resp.end('Temperatura atualizada');
    },
    GET: (req, resp) => {
      if (currentTemperature !== null) {
        resp.end(currentTemperature.toString());
      } else {
        resp.code = 4.04;
        resp.end('Temperatura não disponível');
      }
    }
  }
};

function routeHandler(req, res) {
  const { url, method } = req;
  const resource = routes[url];

  if (resource && resource[method]) {
    return resource[method](req, res);
  }

  res.code = 4.04;
  res.end('Recurso não encontrado');
}

server.on('request', routeHandler);

server.listen(() => {
  console.log('Servidor CoAP iniciado...');
});