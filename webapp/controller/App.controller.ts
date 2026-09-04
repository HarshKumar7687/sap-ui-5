// import MessageToast from "sap/m/MessageToast";  //modules
// import Controller from "sap/ui/core/mvc/Controller"; //controller
// import JSONModel from "sap/ui/model/json/JSONModel"; //json model
// import ResourceModel from "sap/ui/model/resource/ResourceModel";
// import ResourceBundle from "sap/base/i18n/ResourceBundle";

// // /**
// //  * @name ui5.walkthrough.controller.App
// //  */
// export default class AppController extends Controller {
// 	onInit(): void {
// 	  // set data model on view
// 		const oData = {
// 		   recipient: {
// 			  name: "World"
// 		   }
// 		};
// 		const oModel = new JSONModel(oData);
// 		this.getView()?.setModel(oModel,"Recipient");
// 		const i18nModel = new ResourceModel({
// 				bundleName: "ui5.walkthrough.i18n.i18n"
// 		});
// 		this.getView()?.setModel(i18nModel, "i18n");
// 	}

// 	onShowHello(): void {
// 		const recipient = (this.getView()?.getModel("Recipient") as JSONModel)?.getProperty("/recipient/name");
// 		const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
// 		const msg = resourceBundle.getText("helloMsg", [recipient]) as string;
// 		MessageToast.show(msg);
// 	 }
// };

import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @name ui5.tutorial.walkthrough.controller.App
 */
export default class AppController extends Controller {
	onShowHello(): void {
		// read msg from i18n model
		const recipient = (this.getView()?.getModel("Recipient") as JSONModel)?.getProperty("/recipient/name");
		const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
		const msg = resourceBundle.getText("helloMsg", [recipient]) as string;
		// show message
		MessageToast.show(msg);
	}
};
