const EventEmitter = require('events');

class ContactManager extends EventEmitter {
    constructor() {
        super();
        this.contacts = [];
    }

    addContact(name, phoneNumber) {
        const contact = { name, phoneNumber };
        this.contacts.push(contact);
        this.emit('contactAdded', contact);
    }

    viewAllContacts() {
        return this.contacts;
    }

    searchContact(name) {
        const contact = this.contacts.find((contact) => contact.name === name);
        return contact || null;
    }
}

module.exports = ContactManager;
