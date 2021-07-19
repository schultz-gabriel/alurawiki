import { SiteClient } from 'datocms-client';

export default async function Post(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '9bcb177f6095be872305166c56b04b';
        const client = new SiteClient(TOKEN);


        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "976025", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            
        })
        console.log('batata', registroCriado)

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
} 

