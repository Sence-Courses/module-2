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
    case 'Depositar':
      chargeDepositData();
      break;
  }
});

const chargeDepositData = () => {
  if (window.sessionStorage.getItem('saldo') == null) {
    window.sessionStorage.setItem('saldo', '60000');
  }  
  window.sessionStorage.setItem('transacciones', JSON.stringify(transacciones));
  const balanceElement = document.getElementById("balance");
  const balance = window.sessionStorage.getItem('saldo');
  balanceElement.textContent = amountFormatter.format(balance);
}

const amountFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});

