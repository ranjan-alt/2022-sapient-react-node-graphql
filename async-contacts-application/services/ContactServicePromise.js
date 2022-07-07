const fs = require("fs");
const { resolve } = require("path");
const path = require("path");

const fileName = path.join(__dirname, "contacts.json");

class ContactService {
  constructor() {
    this.data = [];
    if (fs.existsSync(fileName)) {
      this.data = JSON.parse(fs.readFileSync(fileName, "utf-8"));
    }
  }

  getAllContacts() {
    return new Promise((resolve, reject) => {
      resolve([...this.data.contacts]);
    });
  }
  getContatcById(id) {
    return new Promise((resolve, reject) => {
      if (!id || typeof id !== "number")
        reject("id was not supplied in the request ");
      //we dont have to call return
      //  reject will implicitly  take care

      let contact = this.data.contacts.find((c) => c.id === id);
      if (!contact) {
        reject("sorry contact not found");
      }
      resolve(contact);
    });
  }
}

module.exports = ContactService;
