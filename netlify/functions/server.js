const fs = require('fs');

exports.handler = async function(event, context) {
  const data = JSON.parse(fs.readFileSync('server.json', 'utf8'));
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
