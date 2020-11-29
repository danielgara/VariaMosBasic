import { ModelElement } from "../../../model/ModelElement";

export class FileElement extends ModelElement {
    public constructor(currentModel:any){
        super(
            "file.png",
            "file",
            100,
            40,
            "shape=file",
            "File",
            currentModel
        );

        let properties = this.getProperties();
        properties.push(
            { 
                "id":"filename", "label":"Filename", "defValue":"", 
                "inputType":"text", "disabled":"false", "display":"true"
            },
            { 
                "id":"destination", "label":"Destination", "defValue":"", 
                "inputType":"text", "disabled":"false", "display":"true"
            }
        );
        this.setProperties(properties);
    }
}