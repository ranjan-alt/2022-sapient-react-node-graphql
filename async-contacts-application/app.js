//working with async
const ContactService = require("./services/ContactServiceAsync");

const cs = new ContactService();

// get a contact
cs.getContactById(1, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(data);
  }
});

// ===========================================

// add a new contact
let uContact = {
  id: 1,
  name: "monga",
  email: "monga@gmail.com",
  phone: 987654563,
  city: "bhagalpur",
};

cs.addContact(uContact, (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(data);
  }
});

cs.getAllContacts((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
