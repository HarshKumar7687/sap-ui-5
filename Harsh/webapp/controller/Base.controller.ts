import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @name ui5.tutorial.walkthrough.controller.Base
 */
export default class BaseController extends Controller {
	onShowUnnamedForm(): void {
		// read msg from i18n model
		const unNamedName = (this.getView()?.getModel() as JSONModel)?.getProperty("/unnamed/name");
		const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
		const msgUnnamed = resourceBundle.getText("UnnamedMsg", [unNamedName]) as string;

		// show message
		MessageToast.show(msgUnnamed);
	}
	onShowNamedForm(): void {
		// read msg from i18n model
		const namedName = (this.getView()?.getModel("Named") as JSONModel)?.getProperty("/named/name");
		const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
		const msgNamed = resourceBundle.getText("NamedMsg", [namedName]) as string;

		// show message
		MessageToast.show(msgNamed);
	}
};
