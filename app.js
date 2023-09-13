const readline = require('readline');
const ContactManager = require('./contacts');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contactManager = new ContactManager();

function displayMenu() {
    console.log('Welcome to your Contact Manager');
    console.log('1. Add a contact');
    console.log('2. View all contacts');
    console.log('3. Search for a contact');
    console.log('4. Exit');
}

function main() {
    displayMenu();
    rl.question('Enter the option number: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Enter the name: ', (name) => {
                    rl.question('Enter the phone number: ', (phone) => {
                        contactManager.addContact(name, phone);
                        console.log('Contact added successfully.');
                        main();
                    });
                });
                break;
            case '2':
                const allContacts = contactManager.getAllContacts();
                console.log('All Contacts:');
                allContacts.forEach((contact) => {
                    console.log(`Name: ${contact.name}, Phone: ${contact.phone}`);
                });
                main();
                break;
            case '3':
                rl.question('Enter the name to search for: ', (name) => {
                    const foundContact = contactManager.searchContact(name);
                    if (foundContact) {
                        console.log(`Contact found: Name: ${foundContact.name}, Phone: ${foundContact.phone}`);
                    } else {
                        console.log('Contact not found.');
                    }
                    main();
                });
                break;
            case '4':
                console.log('Exiting the application.');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please choose a valid option.');
                main();
                break;
        }
    });
}

main();
