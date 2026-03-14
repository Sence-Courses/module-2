let contactos = [
  {
    id: 8845,
    name: 'John Doe',
    cbu: 123456789,
    alias: ' john.doe',
    bank: 'ABC Bank'
  },
  {
    id: 2407,
    name: 'Jane Smith',
    cbu: 987654321,
    alias: 'jane.smith',
    bank: 'XYZ Bank'
  }
];

const transacciones = [
  {
    type: 'buy',
    detail: 'Compra en línea.',
    amount: 5000
  },
  {
    type: 'deposit',
    detail: 'Depósito.',
    amount: 1000
  },
  {
    type: 'trx-rec',
    detail: 'Transferencia recibida.',
    amount: 7500
  },
  {
    type: 'buy',
    detail: 'Compra en línea.',
    amount: 5550
  },
  {
    type: 'deposit',
    detail: 'Depósito misma cuenta.',
    amount: 10500
  },
  {
    type: 'trx-rea',
    detail: 'Transferencia realizada.',
    amount: 7575
  }
];

document.addEventListener('DOMContentLoaded', e => {
  const pageTitle = document.title;
  const pageId = pageTitle.split(" ").pop();
  
  switch(pageId) {
    case 'Login':
      chargeLoginData();
      break;
    case 'Principal':
      chargeMenuData();
      break;
  }
});

const chargeLoginData = () => {
  window.sessionStorage.setItem('nombreUsuario', 'Peter Jackson');
  window.sessionStorage.setItem('saldo', '60000');
  window.sessionStorage.setItem('contactos', JSON.stringify(contactos));
  window.sessionStorage.setItem('transacciones', JSON.stringify(transacciones));
}

const chargeMenuData = () => {
  const balanceElement = document.getElementById("balance");
  const balance = window.sessionStorage.getItem('saldo');
  balanceElement.textContent = amountFormatter.format(balance);
}

const amountFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});
