const fs = require('fs')
const path = require('path')

exports.handler = async function (event, context) {
    const filePath = path.resolve(__dirname, '../../server.json')

    try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro ao ler o arquivo server.json' })
        }
    }
}
