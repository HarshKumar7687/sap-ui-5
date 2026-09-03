import MessageToast from "sap/m/MessageToast";  //modules
import Controller from "sap/ui/core/mvc/Controller"; //controller

// /**
//  * @name ui5.walkthrough.controller.App
//  */
export default class AppController extends Controller {
	onShowHello(): void {
		// alert("Hello World");
		MessageToast.show("Hello World");
	 }
};