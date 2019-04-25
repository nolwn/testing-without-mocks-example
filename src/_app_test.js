// Copyright Titanium I.T. LLC.
"use strict";

const assert = require("./assert.js");
const App = require("./app.js");
const CommandLine = require("./command_line.js");

describe("Nothing", function() {

	it("ROT-13s input", function() {
		const cli = CommandLine.createNull("hello");

		const app = new App(cli);
		const response = app.run();
		assert.equal(response, "uryyb");
	});

});