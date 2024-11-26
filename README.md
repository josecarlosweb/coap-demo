# CoAP Demo: Servidor e Clientes para Monitoramento de Temperatura

Este projeto é um exemplo de aplicação utilizando o protocolo **CoAP (Constrained Application Protocol)**, implementado com a biblioteca JavaScript `coap`. Ele simula um cenário de IoT em que:

- Um **servidor CoAP** recebe dados de temperatura de um cliente (sensor).
- Outro cliente (controlador) consulta a temperatura e, caso ela esteja acima de 30°C, simula a ativação de um equipamento.

## Estrutura do Projeto

- **`server.js`**: Implementa o servidor CoAP que recebe e processa requisições dos clientes.
- **`sensor_one.js`**: Simula um sensor de temperatura que envia valores periodicamente ao servidor.
- **`actuator_one.js`**: Simula um controlador que consulta a temperatura no servidor e executa ações baseadas nos dados recebidos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Biblioteca `coap`**: Para implementação do protocolo CoAP.
- **Protocolo UDP**: Base de comunicação para o CoAP.

## Pré-requisitos

1. **Node.js** instalado em sua máquina.
2. Conhecimento básico sobre protocolo CoAP e redes IoT.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/coap-demo.git
   cd coap-demo
   ```
2. Instale as dependências:
```bash
npm install
```

## Como executar

Para cada etapa inicie um novo terminal e execute o passo.

1. Execute o servidor CoAP:
```bash
node server.js
```

2. Inicie o cliente sensor
```bash
node sensor_one.js
```

3. Inicie o cliente atuador
```bash
node actuator_one.js
```

## Funcionamento

### Servidor
 - Endpoint /temperature:
   - PUT: Atualiza a temperatura com os dados enviados pelo cliente.
   - GET: Retorna a última temperatura registrada.

### Cliente 1 (Sensor de Temperatura)
Gera valores de temperatura entre 25°C e 35°C e os envia para o servidor via PUT no endpoint /temperature.

### Cliente 2 (Controlador)
* Consulta a temperatura no servidor via GET no endpoint /temperature.
* Simula a ativação de um equipamento caso a temperatura seja superior a 30°C.
