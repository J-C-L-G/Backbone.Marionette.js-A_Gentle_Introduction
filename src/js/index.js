import "../scss/styles.scss";
import $ from "jquery";
import Backbone from "backbone";
import Marionette from 'backbone.marionette';

// import {test} from "./utility";
// test("carlos");


/**
 * Creates the application.
 * @type {Marionette.Application}
 */
const ContactManager = new Marionette.Application({});

/**
 * Assigns the view constructor as an Application's property.
 */

ContactManager.StaticView = Marionette.ItemView.extend({
    template: "#static-template"
});


ContactManager.ContactView = Marionette.ItemView.extend({
    template: "#contact-list-item",
    tagName: "li",
    events: {
        "click span#phoneNumber" : "alertPhoneNumber"
    },
    alertPhoneNumber(event){
        alert(this.model.escape("phoneNumber"));
    }
});

ContactManager.ContactsCollectionView = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: ContactManager.ContactView
});

ContactManager.Contact = Backbone.Model.extend({
    defaults:{
        firstName: "Carlos",
        lastName: "Ledezma"
    }
});

ContactManager.ContactCollection = Backbone.Collection.extend({
    model: ContactManager.Contact,
    comparator(model1, model2){
        if(model1.get("firstName") !== model2.get("firsName")){
            return (model1.get("firstName") < model2.get("firstName")) ? -1 : 1;
        }else if(model1.get("lastName") !== model2.get("lastName")){
            return (model1.get("lastName") < model2.get("lastName")) ? -1 : 1;
        }
        else{
            return 0;
        }
    }
}
);


/**
 * Instantiates the Layout view to manage child views,
 * and assigns the property regions to the App.
 */
ContactManager.on("before:start", ()=>{
    const RegionContainer = Marionette.LayoutView.extend({
        el: "#app-container",
        regions: {
            main : "#main-region",
            contact: "#contact-region",
            secondary: "#secondary-region"
        }
    });

    ContactManager.regions = new RegionContainer();
});


/**
 * Instantiate the child views and assigns to a region of the Layout View.
 */
ContactManager.on("start",()=>{

    const collection = new ContactManager.ContactCollection([
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

    const mainStaticView = new ContactManager.StaticView({});
    const secondaryStaticView = new ContactManager.StaticView({
        template: "#different-static-template"
    });
    const contactListView = new ContactManager.ContactsCollectionView({
        collection: collection
    });

    ContactManager.regions.main.show(mainStaticView);
    ContactManager.regions.contact.show(contactListView);
    ContactManager.regions.secondary.show(secondaryStaticView);

    console.log("ContactManager has started!");
});

/**
 * Starts the Application.
 */
ContactManager.start();