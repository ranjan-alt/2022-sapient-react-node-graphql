const fs = require("fs");
const { type } = require("os");
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

  getContactById(id, callback) {
    if (!callback || typeof callback !== "function") {
      throw new Error("callback function is missing");
    }
    setTimeout(() => {
      if (!id || typeof id !== "number") {
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
}

module.exports = ContactService;
