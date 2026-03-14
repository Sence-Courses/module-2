document.addEventListener('DOMContentLoaded', e => {
  const pageTitle = document.title;
  const pageId = pageTitle.split(" ").pop();
  
  switch(pageId) {
    case 'Depositar':
      addDepositListener();
      break;
  }
});

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
