const coap = require('coap');

function sendTemperature(temperature) {
  const req = coap.request({
    host: 'localhost',
    port: 5683,
    method: 'PUT',
    pathname: '/temperature'
  });

  req.write(temperature.toString());
  req.end();

  req.on('response', (res) => {
    console.log('Resposta do servidor:', res.payload.toString());
  });
}

setInterval(() => {
  const temperature = (Math.random() * 10 + 25).toFixed(2); // Temperatura entre 25°C e 35°C
  console.log(`Enviando temperatura: ${temperature}°C`);
  sendTemperature(temperature);
}, 5000); // A cada 5 segundos