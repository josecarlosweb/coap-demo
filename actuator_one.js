const coap = require('coap');

function checkTemperature() {
  const req = coap.request({
    host: 'localhost',
    port: 5683,
    method: 'GET',
    pathname: '/temperature'
  });

  req.end();

  req.on('response', (res) => {
    const temperature = parseFloat(res.payload.toString());
    console.log(`Temperatura atual: ${temperature}°C`);

    if (temperature > 30) {
      console.log('Temperatura alta! Equipamento ativado.');
    } else {
      console.log('Temperatura estabilizada, desligando equipamento.');
    }
  });
}

// Consulta a temperatura periodicamente
setInterval(() => {
  console.log('Consultando temperatura...');
  checkTemperature();
}, 7000); // A cada 7 segundos