const getTrxs = () => window.sessionStorage.getItem('transacciones');

const addTrx = (trx) => {
  const storageTrxs = getTrxs();
  let trxs = JSON.parse(storageTrxs);
  trxs.push(trx);
  window.sessionStorage.setItem('transacciones', JSON.stringify(trxs));
};