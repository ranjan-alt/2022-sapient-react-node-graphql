// wii be invoker
const ContactService = require("./services/ContactService");
const cs = new ContactService();

let contact = cs.getContactById(2);
console.log(contact);

let newContact = {
  name: "radhika",
  email: "radhika@gmail.com",
  phone: 123445679,
  city: "delhi",
}; //its an object

let returnContact = cs.addContact(newContact);
console.log(`inserted contact: ${returnContact}`);

console.log("all contacts are");
cs.getAllContact().forEach((contact) => {
  console.log(contact);
});

let uContact = {
  id: 1,
  name: "monga",
  email: "monga@gmail.com",
  phone: 987654563,
  city: "bhagalpur",
};
cs.updateContact(uContact);
