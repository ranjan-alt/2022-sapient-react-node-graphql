//shall have service code
class ContactService {
  constructor() {
    this.data = {
      idCounter: 2,
      contacts: [
        {
          id: 1,
          name: "ranjan",
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
  //get contact

  getContactById(id) {
    if (!id || typeof id !== "number") {
      throw new Error("sorry please pass id as number");
    }

    const contact = this.data.contacts.find((c) => c.id === id);
    console.log(contact);

    if (contact) {
      console.log("contact found", contact);
      return { ...contact };
    }

    return null;
  }

  //save contact
  addContact(contact) {
    if (!contact || typeof contact !== "object") {
      throw new Error("contact is not a object");
    }
    const requiredFields = ["name", "email", "phone", "city"];
    const missingFields = [];

    requiredFields.forEach((field) => {
      if (!(field in contact)) {
        missingFields.push(field);
      }
    });

    if (missingFields.length !== 0) {
      throw new Error(`required missing fields ${missingFields.join()}`);
    }
    contact.id = ++this.data.idCounter;
    this.data.contacts.push(contact);
    return { ...contact };
  }
  //get all contact

  getAllContact() {
    return [...this.data.contacts];
  }
  //update contact
  //   1. check for updated contact
  // 2. check if the object id exists
  //3. if the id exist delete the record which matches
  // 4. post a new contact
  updateContact(contact) {
    if (!contact || typeof contact !== "object") {
      throw new Error("contact is not an object");
    }
    const requiredFields = ["name", "email", "phone", "city"];
    const missingFields = [];

    requiredFields.forEach((field) => {
      if (!field in contact) {
        missingFields.push(field);
      }
    });
    if (missingFields.length !== 0) {
      throw new Error(`required missing fields ${missingFields.join()}`);
    }
    this.deleteContact(contact.id);
    this.data.contacts.push(contact);
    return { ...contact };
  }
  //delete contact
  //   1.delete the id , splice and send the message

  deleteContact(id) {
    if (typeof id != "number") {
      throw new Error("a number must be supplied");
    }
    let index = this.data.contacts.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new Error("invalid id for deletion");
    }
    this.data.contacts.splice(index, 1);
  }
}

module.exports = ContactService;
