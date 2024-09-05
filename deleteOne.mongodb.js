const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'ALUNOS';

use(database);

db [collection].deleteOne(
    {cod_aluno:'17245'}
)