let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

let select = document.getElementById('estado');

for (let i = 0; i < estados.length; i += 1) {
  let newOption = document.createElement('option');
  select.appendChild(newOption);
  newOption.innerText = estados[i];
}