//import post from 'request-promise';

import {token, num_condado} from './Privado'

const { post } = require('request-promise');


const sendMessage = (message: string) => {
    post({
        uri: 'https://api.zenvia.com/v2/channels/whatsapp/messages',
        headers: {
            'X-API-TOKEN': token,
        },
        body: {
            from: 'delicate-sing',
            to: num_condado,
            contents: [
                {
                    type: 'text',
                    text: message,
                },
            ],
        },
        json: true,
    })
        .then((response:any) => {
            console.log('Response:', response)
        })
        .catch((error:any) => {
            console.log('Error:', error)
        })
    }

export default sendMessage