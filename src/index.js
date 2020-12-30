const { post } = require('request-promise');
require('dotenv/config');

post({
  uri: 'https://api.zenvia.com/v2/channels/sms/messages',
  headers: {
    'X-API-TOKEN': process.env.NEW_CHAVE,
  },
  body: {
    from: process.env.DESTINATARIO_1,
    to: process.env.USER_TELEFONE,
    contents: [
      {
        type: 'text',
        text: 'Olá, Tudo Bem?! Essa é uma mensagem de teste.',
      },
    ],
  },
  json: true,
})
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
