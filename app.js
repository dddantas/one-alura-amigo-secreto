let amigos = [];
let amigosSorteados = [];

/*
Atalho para console.log() porque eu quero.
Apenas para desenvolvimento.
*/
function log(...params) {
  console.log(...params);
}

/*
Mensagem de aviso ao usuário a partir utilizando toast.
- aviso: mensagem em texto que aparecerá no toast
- t (tipo):
  - `success` para confirmações de sucesso
  - `error` para avisos de erro
*/
function mostrarToast(aviso, t) {
  let tipo = t ? t : 'error';
  let toastContainer = document.getElementById('toast-container');
  let toast = document.createElement('div');
  toast.className = `toast toast-${tipo}`;
  toast.innerText = aviso;

  toastContainer.appendChild(toast);

  // Mostra o toast
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  // Esconde o toast depois de 3 segundos
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 3000);
}

function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  lista.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join('');
}
function atualizarListaDeSorteados() {
  let lista = document.getElementById('resultado');
  lista.innerHTML = '';
  lista.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join('');
}

function adicionarAmigo() {
  // log('adicionar amigo', { nomeAmigo });

  let inputAmigo = document.getElementById('amigo');
  let nomeAmigo = String(inputAmigo.value);
  if (nomeAmigo.replace(' ', '') === '') {
    mostrarToast('Insira o nome do amigo que participará do sorteio');
    return;
  }

  amigos.push(nomeAmigo);
  inputAmigo.value = '';
  inputAmigo.focus();

  log(amigos);
  mostrarToast(`${nomeAmigo} adicionado à lista de amigos para sorteio!`, 'success');
  atualizarLista();
}

function sortearAmigo() {
   if (amigos.length <= 0) {
    mostrarToast('Adicione um(a) amigo(a) primeiro!');
    return;
   }
   
  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  amigoSorteado = amigos[indiceSorteado];

  atualizarListaDeSorteados();
}