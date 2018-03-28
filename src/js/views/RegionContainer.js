import Marionette from "backbone.marionette";

const RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
        main : "#main-region",
        contact: "#contact-region",
        secondary: "#secondary-region"
    }
});

export default RegionContainer;