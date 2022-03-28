import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import sendMessage from './Envio-msg'

// Inicializa o express e define uma porta
const app = express()
const PORT = 3000
// Indica para o express usar o JSON parsing do body-parser
app.use(bodyParser.json())

app.post('/hook', (req: Request, res: Request) => {
    const contact = req.body.message.visitor // Armazena em uma variável quem mandou a mensagem
    const message = req.body.message.contents[0].text // Armazena em uma variável a mensagem

    if (message.toLowerCase() === 'oi') { // Verifica se a mensagem enviada foi um "Oi"
        sendMessage(`Olá ${contact.firstName}! Como posso te ajudar?`)
    } else { // Se não, mande a seguinte mensagem
        sendMessage('Me desculpe, não entendi.')
    }
    console.log(req.body) // Exibe no console da aplicação o objeto da mensagem
    //res.status(200).end() // Responde quem solicitou nosso webhook com status 200
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))