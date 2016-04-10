//const remote = require('electron');
console.log(`REMOTE ${remote}`);
//const dialog = remote.require('dialog');

import React, { Component } from "react";
import { remote } from 'electron';

class AddFolder extends Component {

	openFolderDialog() {
		console.log(`REMOTE: ${remote}`);
		let result = remote.dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]});
		console.log(`RESULT ${result}`);
	}

	render() {
		return <button onClick={this.openFolderDialog.bind(this)}>Pick a folder</button>
	}
}

export default AddFolder