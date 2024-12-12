const fs = require('fs')

exports.handler = async function (event, context) {
    try {
        const data = JSON.parse(
            fs.readFileSync('netlify/functions/server.json', 'utf8')
        )
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Permitir acesso de qualquer origem
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
            },
            body: JSON.stringify(data)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Erro ao carregar o arquivo server.json'
            })
        }
    }
}
