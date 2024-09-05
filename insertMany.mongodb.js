const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'ALUNOS';

use(database);

db [collection].insertMany(
    [
        {
            "cod_aluno":"11345",
            "nome":"Mateus Ribeiro da Silva",
            "rg":"564239560",
            "cpf":"45506838807"
        },
        {
            "cod_aluno":"12345",
            "nome":"Gabriel Pereira dos Santos",
            "rg":"564329570",
            "cpf":"45056838808"
        },
        {
            "cod_aluno":"13245",
            "nome":"Gustavo Alves Gonçalves",
            "rg":"554239580",
            "cpf":"45056838909"
        },
        {
            "cod_aluno":"14245",
            "nome":"Roberto Teixeira Souza",
            "rg":"564239590",
            "cpf":"45056839908"
        },
        {
            "cod_aluno":"15245",
            "nome":"Alberto Nogueira de Jesus",
            "rg":"564239670",
            "cpf":"45056840008"
        },
        {
            "cod_aluno":"16245",
            "nome":"Felipe Prado Albuquerque",
            "rg":"564239760",
            "cpf":"45056842208"
        },
        {
            "cod_aluno":"17245",
            "nome":"Vitor Rodrigues Pina",
            "rg":"564239770",
            "cpf":"45056842308"
        },
        {
            "cod_aluno":"18245",
            "nome":"Thiago dos Santos Peres",
            "rg":"564239780",
            "cpf":"45056842408"
        },
        {
            "cod_aluno":"19245",
            "nome":"Paulo Costa Macedo",
            "rg":"564239790",
            "cpf":"45056842508"
        },
        {
            "cod_aluno":"20245",
            "nome":"Marcos Trindade Oliveira",
            "rg":"564239890",
            "cpf":"45056842608"
        }
    ]
)