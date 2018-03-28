import Marionette from "backbone.marionette";

const ContactView = Marionette.ItemView.extend({
    template: "#contact-list-item",
    tagName: "li",
    events: {
        "click span#phoneNumber" : "alertPhoneNumber"
    },
    alertPhoneNumber(event){
        alert(this.model.escape("phoneNumber"));
    }
});

export default ContactView;