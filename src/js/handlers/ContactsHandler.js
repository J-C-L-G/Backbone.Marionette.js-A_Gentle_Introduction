import ContactCollection from "../collections/ContactCollection";

export default (ContactManager) => {

    ContactManager.reqres.setHandler("contact:entities", () => {
        return  new ContactCollection([
            {
                firstName: "Zawn",
                lastName: "Zawl",
                phoneNumber: "555-0184"
            },
            {
                firstName: "Alice",
                lastName: "Brarten",
                phoneNumber: "555-0184"
            },
            {
                lastName: "Ledezma",
                phoneNumber: "123-0184",
            },
            {
                lastName: "Garcia",
                phoneNumber: "456-0184"
            },
            {
                firstName: "Alice",
                lastName: "Aranston",
                phoneNumber: "55-184"
            },
        ]);
    });

};