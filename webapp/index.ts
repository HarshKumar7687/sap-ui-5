//ui5.walkthrough comes from the namespace defined in the index.html file
/*
    ui5.walkthrough   .   view   .   App
    ──────┬──────────       │        │
     namespace            folder   view name
*/
import XMLView from "sap/ui/core/mvc/XMLView";

XMLView.create({
	viewName: "ui5.walkthrough.view.App",
	id: "app"
}).then(function (oView) {
	oView.placeAt("content");
});


alert("Hello Alok the great!!!!");

