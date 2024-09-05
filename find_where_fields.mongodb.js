const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'ALUNOS';

use(database);

db[collection].find(
    {"nome":"Felipe Prado Albuquerque"},
    {"_id":0, "cod_aluno":0}
);