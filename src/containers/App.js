import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions';

import FolderList from "../components/FolderList";
import AddFolder from "../components/AddFolder";

class App extends Component {

	render() {
		const { folders, actions } = this.props;
		return (<section>
					<FolderList folders={folders} />
					<footer>
						<AddFolder onFolderSelected={actions.folderSelected}/>
					</footer>
				</section>);
	}
}

App.propTypes = {
  folders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	console.log(`mappign state ${state}`);
  return {
    folders: state.get('folders')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)