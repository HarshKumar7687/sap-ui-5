import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.tutorial.walkthrough
 */
export default class Component extends UIComponent {
	public static metadata = {
		"interfaces": ["sap.ui.core.IAsyncContentCreation"],
		"manifest": "json" 
	};
	init(): void {
		// call the init function of the parent
		super.init();
		
		// set data model
		const oNamedData = {
			named: {
				name: "Harsh",
                collage: "SOA University",
                company:"Procify"
			}
		};
        const oUnnamedData = {
            unnamed: {
                name: "Krishna",
                collage: "BHU University",
                company:"Microsoft"
            }
        };
		const oNamedModel = new JSONModel(oNamedData);
		const oUnnamedModel = new JSONModel(oUnnamedData);
		this.setModel(oNamedModel, "Named");
		this.setModel(oUnnamedModel);
	};
};