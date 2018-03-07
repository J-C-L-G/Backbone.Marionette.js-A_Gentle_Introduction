import "../scss/styles.scss";
import $ from "jquery";
import Backbone from "backbone";
import Marionette from 'backbone.marionette';

//import {test} from "./utility";
//test("carlos");


/**
 * Creates the application.
 * @type {Marionette.Application}
 */
const ContactManager = new Marionette.Application({});

/**
 * Instantiates the Layout view to manage child views,
 * and assigns the property regions to the App.
 */
ContactManager.on("before:start", ()=>{
    const RegionContainer = Marionette.LayoutView.extend({
        el: "#app-container",
        regions: {
            main : "#main-region",
            secondary: "#secondary-region"
        }
    });
    ContactManager.regions = new RegionContainer();
});

/**
 * Assigns the view constructor as an Application's property.
 */
ContactManager.StaticView = Marionette.ItemView.extend({
    template: "#static-template"
});

/**
 * Instantiate the child views and assigns to a region of the Layout View.
 */
ContactManager.on("start",()=>{

    const mainStaticView = new ContactManager.StaticView({
        template: "#static-template"
    });
    const secondaryStaticView = new ContactManager.StaticView({
        template: "#different-static-template"
    });

    ContactManager.regions.main.show(mainStaticView);
    ContactManager.regions.secondary.show(secondaryStaticView);

    console.log("ContactManager has started!");
});

/**
 * Starts the Application.
 */
ContactManager.start();