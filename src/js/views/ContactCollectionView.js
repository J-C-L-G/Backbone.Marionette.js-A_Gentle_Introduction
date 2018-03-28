import Marionette from "backbone.marionette";
import ContactView from "./ContactView";

const ContactCollectionView = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: ContactView
});

export default ContactCollectionView;