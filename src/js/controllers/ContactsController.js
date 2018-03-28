import ContactsCollectionView from "../views/ContactCollectionView";
import ContactManager from "../app";

export default class ContactsController {
    constructor(ContactManager) {
        this.contacts = ContactManager.request("contact:entities");
        this.contactListView = new ContactsCollectionView({
            collection: this.contacts
        });
    }
    listContacts(){
        ContactManager.regions.contact.show(this.contactListView);
    }
}