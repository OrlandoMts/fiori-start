sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("omontes.invoices.controller.MainView", {
            onInit: function () {
                const objJson = new sap.ui.model.json.JSONModel();
                const objView = this.getView();
                objJson.loadData("./model/menu.json");
                objView.setModel(objJson, "selectorScreen")
            }
        });
    });
