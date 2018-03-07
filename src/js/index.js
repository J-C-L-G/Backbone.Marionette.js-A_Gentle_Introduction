import "../scss/styles.scss";
import $ from "jquery";
import Backbone from "backbone";
import Marionette from 'backbone.marionette';

//import {test} from "./utility";
//test("carlos");


const ContactManager = new Marionette.Application({});

ContactManager.StaticView = Marionette.ItemView.extend({
    el: "#main-region",
    template: "#static-template",
    id: "static-view",
    className: "instruction"
});

ContactManager.on("start",()=>{

  //const staticView = new ContactManager.StaticView();

    const staticView = new ContactManager.StaticView({
        template: "#different-static-template"
    });

    staticView.render();
    console.log("ContactManager has started!");
});

ContactManager.start();