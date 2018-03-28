import Backbone from "backbone";
import Contact from "../models/Contact"

const ContactCollection = Backbone.Collection.extend({
    model: Contact,
    comparator: (model1, model2)=>{
        if(model1.get("firstName") !== model2.get("firsName")){
            return (model1.get("firstName") < model2.get("firstName")) ? -1 : 1;
        }else if(model1.get("lastName") !== model2.get("lastName")){
            return (model1.get("lastName") < model2.get("lastName")) ? -1 : 1;
        }else{
            return 0;
        }
    }
});

export default ContactCollection;