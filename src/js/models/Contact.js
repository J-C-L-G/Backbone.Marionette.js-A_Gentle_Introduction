import Backbone from "backbone";

const Contact = Backbone.Model.extend({
    defaults: {
        firstName: "Carlos",
        lastName: "Ledezma"
    }
});

export default Contact;