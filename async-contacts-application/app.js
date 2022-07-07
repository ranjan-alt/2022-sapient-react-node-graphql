//working with async
const ContactService = require("./services/ContactServiceAsync");

const cs = new ContactService();

cs.getContactById(1, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(data);
  }
});
