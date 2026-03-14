const getContacts = () => window.sessionStorage.getItem('contactos');
const getTrxs = () => window.sessionStorage.getItem('transacciones');

const findContact = (contactId) => {
  const storageContact = getContacts();
  const contacts = JSON.parse(storageContact);
  const foundContact = contacts.find(c => c.id === contactId);
  return foundContact;
}

const addContact = (contact) => {
  const storageContact = getContacts();
  let contacts = JSON.parse(storageContact);
  contacts.push(contact);
  window.sessionStorage.setItem('contactos', JSON.stringify(contacts));
};

const removeContact = (contactName) => {
  const storageContact = getContacts();
  let contacts = JSON.parse(storageContact);
  contacts = contacts.filter(u => u.name !== contactName);
  window.sessionStorage.setItem('contactos', JSON.stringify(contacts));
};

const addTrx = (trx) => {
  const storageTrxs = getTrxs();
  let trxs = JSON.parse(storageTrxs);
  trxs.push(trx);
  window.sessionStorage.setItem('transacciones', JSON.stringify(trxs));
};