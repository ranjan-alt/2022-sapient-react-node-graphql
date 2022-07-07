const ContactService = require("./services/ContactServicePromise");
let cs = new ContactService();
// cs.getAllContacts()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

cs.getContatcById(8)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
