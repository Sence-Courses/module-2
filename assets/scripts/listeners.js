document.addEventListener('DOMContentLoaded', e => {
  const pageTitle = document.title;
  const pageId = pageTitle.split(" ").pop();
  
  switch(pageId) {
    case 'Principal':
      addMenuListener();
      break;
    case 'Depositar':
      addDepositListener();
      break;
    case 'Dinero':
      addSendListener();
      break;
    case 'Movimientos':
      addTrxlistener();
      break;
  }
});

const addMenuListener = () => {}

const addDepositListener = () => {
  const depositForm = document.getElementById("depositForm");

  depositForm.addEventListener('submit', function(e) {
    const balance = window.sessionStorage.getItem('saldo');
    const deposit = document.getElementById("depositAmount").value;
    const newBalance = Number.parseInt(balance) + Number.parseInt(deposit);

    const fBalance = amountFormatter.format(balance);
    const fDeposit = amountFormatter.format(deposit);
    const fNewBalance = amountFormatter.format(newBalance);

    const trx = {
      type: 'deposit',
      detail: 'Depósito.',
      amount: Number(deposit)
    }
    addTrx(trx);

    window.alert(`
      Detalle de deposito
      -------------------
      Saldo inicial: ${fBalance}  
      Se deposito: ${fDeposit}
      Saldo: ${fNewBalance}    
    `);
    window.sessionStorage.setItem('saldo', newBalance);
  });
}

const addSendListener = () => {
  const listItems = document.querySelectorAll('#contactList li');

  listItems.forEach(item => {
    item.addEventListener('mouseenter', e => {
      window.sessionStorage.setItem('idSelContact', item.id);
    });
  });

  const contactModal = document.getElementById('contactModal');

  contactModal.addEventListener('shown.bs.modal', e => {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');

    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      formData = new FormData(e.target);
      
      const newContact = {
        id: Math.floor(Math.random() * 10000) + 1,
        name: formData.get('nombre'),
        cbu: formData.get('cbu'),
        alias: formData.get('alias'),
        bank: formData.get('banco')
      }
      addContact(newContact);
      window.alert(`Nuevo contacto ${newContact.name} agregado correctamente.`);

      contactList.replaceChildren();
      contactForm.reset();
      modal = bootstrap.Modal.getInstance(contactModal);
      modal.hide();
      chargeSendData();
      addSendListener();  
    });
  });

  const sendMoneyModal = document.getElementById('sendMoneyModal');

  sendMoneyModal.addEventListener('shown.bs.modal', e => {
    const contactId = window.sessionStorage.getItem('idSelContact');
    const contact = findContact(Number(contactId));
    sendMoneyModal.querySelector('#nombre').value = contact.name;
    sendMoneyModal.querySelector('#cbu').value = contact.cbu;
    sendMoneyModal.querySelector('#banco').value = contact.bank;

    const sendMoneyButton = document.getElementById('sendMoneyButton');

    sendMoneyButton.addEventListener('click', e => {
      const balance = Number(window.sessionStorage.getItem('saldo'));
      const depositAmount = Number(sendMoneyModal.querySelector('#depositAmount').value);
      const newBalance = balance - depositAmount;
      const fDepositAmount = amountFormatter.format(depositAmount);
      const fNewBalance = amountFormatter.format(newBalance);
      window.sessionStorage.setItem('saldo', String(newBalance));

      const trx = {
        type: 'trx-rea',
        detail: 'Transferencia realizada.',
        amount: depositAmount
      }
      addTrx(trx);
      
      window.alert(`
        Envio realizado con exito
        -------------------------
        Monto depositado: ${fDepositAmount}
        saldo actual:     ${fNewBalance}
      `);
    });
  });
}

const addTrxlistener = () => {
  const listItems = document.querySelectorAll('#contactList li');
}
