import MessageToast from "sap/m/MessageToast";  //modules
import Controller from "sap/ui/core/mvc/Controller"; //controller
import JSONModel from "sap/ui/model/json/JSONModel"; //json model

// /**
//  * @name ui5.walkthrough.controller.App
//  */
export default class AppController extends Controller {
	onInit(): void {
	  // set data model on view
		const oData = {
		   recipient: {
			  name: "World"
		   }
		};
		const oModel = new JSONModel(oData);
		this.getView()?.setModel(oModel);
	}

	onShowHello(): void {
		// alert("Hello World");
		MessageToast.show("Hello World");
	 }
};