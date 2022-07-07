const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "contacts.json");

class ContactService {
  constructor() {
    try {
      this.data = JSON.parse(fs.readFileSync(fileName, "utf-8"));
    } catch (err) {
      this.data = {
        idCounter: 2,
        contacts: [
          {
            id: 1,
            name: "ranjan sah",
            email: "ranjan@gmail.com",
            phone: 8076868474,
            city: "Delhi",
          },
          {
            id: 2,
            name: "Kumar",
            email: "kumar@gmail.com",
            phone: 123456789,
            city: "Mumbai",
          },
        ],
      };
    }
  }
  // get contact
  getContactById(id, callback) {
    //for this callback refer to app.js file you will understand
    if (!callback || typeof callback !== "function") {
      throw new Error("callback function is missing");
    }
    setTimeout(() => {
      if (!id || typeof id !== "number") {
        // throw new Error("number is missing");
        let err = {};
        err.code = 10001;
        err.msg = "please pass id as number";
        callback(err);
        return;
      }
      let contact = this.data.contacts.find((c) => c.id === id);
      if (!contact) contact = null;
      callback(null, contact);
    }, 0);
  }
  //add new contact
  addContact(contact, callback) {
    if (!callback || typeof callback !== "function") {
      throw new Error("callback function missing");
    }
    setTimeout(() => {
      if (!contact || typeof contact !== "object") {
        // throw new Error("contact is not an object");
        let err = {};
        err.code = 1001;
        err.msg = "please pass an object";
        callback(err);
        return;
      }
      const requiredFields = ["name", "email", "phone", "city"];
      const missingFields = [];

      requiredFields.forEach((field) => {
        if (!(field in contact)) {
          missingFields.push(field);
        }
      });
      if (missingFields.length !== 0) {
        //   throw new Error(`required missing fields ${missingFields.join()}`);
        let err = {};
        err.code = 1003;
        err.meg = "please supply missing fields" + missingFields.join();
        callback(err);
        return;
      }
      contact.id = ++this.data.idCounter;
      this.data.contacts.push(contact);
      fs.writeFile(
        fileName,
        JSON.stringify(this.data),
        "utf-8",
        (err, data) => {
          if (err) {
            callback(err);
            return;
          }
          callback(null, contact);
        }
      );
    }, 0);
  }
  //get all contact
  getAllContacts(callback) {
    if (!callback || typeof callback !== "function") {
      throw new Error("callback function is missing");
    }
    setTimeout(() => {
      let contacts = this.data.contacts;
      if (contacts.length === 0) {
        let err = {};
        err.code = 10004;
        err.msg = "no contacts found";
        callback(err);
        return;
      }
      callback(null, [...this.data.contacts]);
    }, 0);
  }

  //update contact

  //delete contact
}

module.exports = ContactService;
