const btnDesafiar = document.getElementById('btn_desafiar');
const selectDesafio = document.getElementById('numero_desafio');

const conteudoDados = document.getElementById('conteudo');
const conteudoDesafio04 = document.getElementById('conteudo_desafio4');
const containerMetodosArray = document.getElementById('desafio_02');
const containerOperadores = document.getElementById('desafio_05');

btnDesafiar.onclick = function () {
    containerMetodosArray.classList.add('hidden');
    containerOperadores.classList.add('hidden');

    conteudoDados.innerText = "";
    conteudoDesafio04.innerText = "";

    if (selectDesafio.value == 1) {
        desafioOne();
    }
    else if (selectDesafio.value == 2) {
        desafioTwo();
    }
    else if (selectDesafio.value == 3) {
        desafioThree();
    }
    else if (selectDesafio.value == 4) {
        desafioFour();
    }
    else if (selectDesafio.value == 5) {
        desafioFive();
    }
    else if (selectDesafio.value == 6) {
        desafioSix();
    }
    else if (selectDesafio.value == 7) {
        desafioSeven();
    }
}

function desafioOne() {
    class Usuario {
        constructor(email, senha) {
            this.email = email;
            this.senha = senha;
        }

        isAdmin() {
            return this.admin === true;
        }
    }

    class Admin extends Usuario {
        constructor(email, senha) {
            super(email, senha);

            this.admin = true;
        }
    }

    const dadosUsuario = new Usuario('liziane@hotmail.com', '123456');
    const dadosAdmin = new Admin('admin@hotmail.com', '789012');

    conteudoDados.innerText = `Usuário é Admin = ${dadosUsuario.isAdmin()} | Admin = ${dadosAdmin.isAdmin()}`;
}

function desafioTwo() {
    containerMetodosArray.classList.remove('hidden');
    const selectMetodosArray = document.getElementById('metodos_array');
    const btnMetodo = document.getElementById('btn_metodo');

    const usuarios = [
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

    btnMetodo.onclick = function () {
        if (selectMetodosArray.value == 1) {
            const idades = usuarios.map(function (item) {
                return item.idade;
            });

            conteudoDados.innerText = `Idades: ${idades}`;
        }
        else if (selectMetodosArray.value == 2) {
            const funcionariosRocketMaiorIdade = usuarios.filter(function (item) {
                return item.empresa == 'Rocketseat' && item.idade >= 10;
            });

            conteudoDados.innerText = "Aperte F12, na aba console, para ver o resultado.";
            console.log(funcionariosRocketMaiorIdade);
        }
        else if (selectMetodosArray.value == 3) {
            const usuarioGoogle = usuarios.find(function (item) {
                return item.empresa === 'Google';
            });

            conteudoDados.innerText = `Resultado: ${usuarioGoogle}`;
        }
        else if (selectMetodosArray.value == 4) {
            const mapFilter = usuarios
                .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
                .filter(usuario => usuario.idade <= 50);

            conteudoDados.innerText = "Aperte F12, na aba console, para ver o resultado.";
            console.log(mapFilter);
        }
    }
}

function desafioThree() {
    conteudoDados.innerText = "Aperte F12, na aba console, para ver o resultado.";
    // 3.1
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.map(item => item + 10));

    // 3.2
    const usuario = { nome: 'Diego', idade: 23 };
    const mostraIdade = usuario => usuario.idade;

    console.log(mostraIdade(usuario));

    // 3.3
    const nome = "Diego";
    const idade = 23;

    const mostraUsuario = (nome = 'Diego', idade = 18) => { return { nome, idade } };

    console.log(mostraUsuario(nome, idade));
    console.log(mostraUsuario(nome));

    // 3.4
    const promise = () => { return new Promise((resolve, reject) => resolve()) };

    console.log(promise());
}

function desafioFour() {
    const empresa = {
        nome: 'Rocketseat',
        endereco: {
            cidade: 'Rio do Sul',
            estado: 'SC',
        }
    };

    const { nome, endereco: { cidade }, endereco: { estado } } = empresa;
    conteudoDados.innerText = `${nome}, ${cidade}, ${estado}`;

    function mostraInfo({ nome, idade }) {
        return `${nome} tem ${idade} anos.`;
    }
    conteudoDesafio04.innerText = mostraInfo({ nome: 'Diego', idade: 23 });
}

function desafioFive() {
    containerOperadores.classList.remove('hidden');
    const selectOperadores = document.getElementById('operadores');
    const btnOperador = document.getElementById('btn_operador');


    conteudoDados.innerText = "Aperte F12, na aba console, para ver o resultado.";

    btnOperador.onclick = function () {
        if (selectOperadores.value == 1) {
            //rest
            const arr = [1, 2, 3, 4, 5, 6];
            const [x, ...y] = arr;

            console.log(x);
            console.log(y);

            function soma(...params) {
                return params.reduce((total, next) => total + next);
            }

            console.log(soma(1, 2, 3, 4, 5, 6));
            console.log(soma(1, 2));
        }
        else if (selectOperadores.value == 2) {
            //spread
            const usuario = {
                nome: 'Diego',
                idade: 23,
                endereco: {
                    cidade: 'Rio do Sul',
                    uf: 'SC',
                    pais: 'Brasil',
                }
            };

            const usuario2 = { ...usuario, nome: 'Gabriel' };
            console.log(usuario2);

            const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };
            console.log(usuario3);
        }
    }
}

function desafioSix() {
    const usuario = 'Diego';
    const idade = 23;

    conteudoDados.innerText = `O usuário ${usuario} possui ${idade} anos.`;
}

function desafioSeven() {
    const nome = 'Diego';
    const idade = 23;
    const usuario = {
        nome,
        idade,
        cidade: 'Rio do Sul',
    };

    conteudoDados.innerText = "Aperte F12, na aba console, para ver o resultado.";
    console.log(usuario);
}