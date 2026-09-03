import MessageToast from "sap/m/MessageToast";  //modules
import Controller from "sap/ui/core/mvc/Controller"; //controller
import JSONModel from "sap/ui/model/json/JSONModel"; //json model

// /**
//  * @name ui5.walkthrough.controller.App
//  */
export default class AppController extends Controller {
	onInit(): void {
	  // set data model on view
		const data = {
		   recipient: {
			  name: "World"
		   }
		};
		const dataModel = new JSONModel(data);
		this.getView()?.setModel(dataModel);
	}
	
	onShowHello(): void {
		// alert("Hello World");
		MessageToast.show("Hello World");
	 }
};