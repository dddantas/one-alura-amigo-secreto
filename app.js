let amigos = [];

/*
Atalho para console.log() porque eu quero.
Apenas para desenvolvimento.
*/
function log(...params) {
  console.log(...params);
}

/*
Mensagem de aviso ao usuário a partir do id 'aviso-input-nome'
*/
function avisarUsuario(aviso) {
  let elementoAvisoUsuario = document.getElementById('aviso-input-nome');

  // se não houver aviso, remove o texto e deixa o elemento invisível
  if (!aviso) {
    elementoAvisoUsuario.style.visibility = 'hidden';
    elementoAvisoUsuario.innerText = '';
    return;
  }

  elementoAvisoUsuario.style.visibility = 'visible';
  elementoAvisoUsuario.innerText = aviso;
}

function adicionarAmigo() {
  // log('adicionar amigo', { nomeAmigo });

  let inputAmigo = document.getElementById('amigo');
  let nomeAmigo = String(inputAmigo.value);
  if (nomeAmigo.replace(' ', '') === '') {
    avisarUsuario('Insira o nome do amigo que participará do sorteio');
    return;
  }

  avisarUsuario();
  amigos.push(nomeAmigo);
  inputAmigo.value = '';
  inputAmigo.focus();
  log(amigos);
}

function sortearAmigo() {
  avisarUsuario();
  console.log('sortear amigo');
}