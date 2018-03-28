import Marionette from "backbone.marionette";

export const StaticView = Marionette.ItemView.extend({
    template: "#static-template"
});

export const CustomStaticView = (props) => {
    return Marionette.ItemView.extend(props);
};
