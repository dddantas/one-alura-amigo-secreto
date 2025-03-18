let amigos = [];

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
}

function sortearAmigo() {
  console.log('sortear amigo');
}