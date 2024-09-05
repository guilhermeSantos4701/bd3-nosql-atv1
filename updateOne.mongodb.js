const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'ALUNOS';

use(database);

db[collection].updateOne(
    {nome:'Mateus Ribeiro da Silva'},
    {$set:{nome:'Rodrigo Solano do Carmo'}}
)

db[collection].updateOne(
    {nome:'Rodrigo Solano do Carmo'},
    {$set:{rg:'564239900'}}
)

db[collection].updateOne(
    {nome:'Rodrigo Solano do Carmo'},
    {$set:{cpf:'45056842708'}}
)
    