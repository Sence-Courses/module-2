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
    case 'Depositar':
      chargeDepositData();
      break;
    case 'Dinero':
      chargeSendData();
      break;
    case 'Movimientos':
      chargeTransactions();
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

const chargeDepositData = () => {
  const balanceElement = document.getElementById("balance");
  const balance = window.sessionStorage.getItem('saldo');
  balanceElement.textContent = amountFormatter.format(balance);
}

const chargeSendData = () => {
  const getContacts = () => window.sessionStorage.getItem('contactos');
  const contactList = document.getElementById('contactList');
  const contacts = JSON.parse(getContacts());

  contacts.forEach( e => {
    const li = document.createElement('li');
    li.id = e.id;
    const div = document.createElement('div');
    div.classList.add('contact-info','label-alone');
    const name = document.createElement('label');
    name.classList.add('contact-name');
    name.textContent = 'Nombre: ' + e.name;
    const cbu = document.createElement('label');
    cbu.classList.add('contact-details');
    cbu.textContent = 'CBU: ' + e.cbu;
    const alias = document.createElement('label');
    alias.classList.add('contact-details');
    alias.textContent = 'Alias: ' + e.alias;
    const banco = document.createElement('label');
    banco.classList.add('contact-details');
    banco.textContent = 'Banco: ' + e.bank;
    div.append(name, cbu, alias, banco);
    li.appendChild(div);
    contactList.appendChild(li);
  });
  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'openSendMoneyModal';
  button.classList.add('btn','btn-primary','button');
  button.setAttribute('data-bs-toggle', 'modal');
  button.setAttribute('data-bs-target', '#sendMoneyModal');
  button.textContent = 'Enviar dinero';
  contactList.appendChild(button);
}

const chargeTransactions = () => {
  const getTrxs = () => window.sessionStorage.getItem('transacciones');
  const trxList = document.getElementById('trxList');
  const trxs = JSON.parse(getTrxs());

  trxs.forEach( e => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList.add('trx-li-style');
    const iconElement = document.createElement('i');
    
    if (e.type === 'deposit' || e.type === 'trx-rec') {
      iconElement.className = 'fa-solid fa-hand-holding-dollar';
    }
    else {
      iconElement.className = 'fa-solid fa-money-bill-trend-up';
    }    
    const detalle = document.createElement('label');
    const amount = amountFormatter.format(e.amount);
    detalle.textContent = `Detalle: ${e.detail} Monto: ${amount}`;

    div.append(iconElement, detalle);
    li.appendChild(div);
    trxList.appendChild(li);
  });
}

const amountFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});

