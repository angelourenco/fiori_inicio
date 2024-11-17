/*global QUnit*/

sap.ui.define([
	"invoices2/invoice_2/controller/Invoices_2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Invoices_2 Controller");

	QUnit.test("I should test the Invoices_2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
