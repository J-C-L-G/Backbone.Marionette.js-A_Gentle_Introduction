import Marionette from "backbone.marionette";
import RegionContainer from "./views/RegionContainer";
import contactHandlers from "./handlers/ContactsHandler";
import {StaticView} from "./views/StaticView";
import ContactsController from "./controllers/ContactsController";

/**
 * Creates the application.
 * @type {Marionette.Application}
 */
const ContactManager = new Marionette.Application({});

/**
 * Includes the data handlers to the application.
 */
contactHandlers(ContactManager);

/**
 * Instantiates the Layout view to manage child views,
 * and assigns the property regions to the App.
 */
ContactManager.on("before:start", ()=>{
    ContactManager.regions = new RegionContainer();
});


/**
 * Instantiate the child views and assigns to a region of the Layout View.
 */
ContactManager.on("start",()=>{
    const mainStaticView = new StaticView({});
    const secondaryStaticView = new StaticView({
        template: "#different-static-template"
    });
    ContactManager.regions.main.show(mainStaticView);
    ContactManager.regions.secondary.show(secondaryStaticView);
    console.log("ContactManager has started!");
});

/**
 * Instantiate the Controller and render it's view.
 */
ContactManager.on("start", ()=>{
    const contactsController = new ContactsController(ContactManager);
    contactsController.listContacts();
});

export default ContactManager;