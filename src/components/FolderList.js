import React, { Component } from "react";

class FolderList extends Component {
	
  render() {
    const { folders } = this.props;
    let items = [];
    if(folders.size === 0) {
      items.push(<li>Add at least one folder!</li>);
    } else {
      items = folders.map((folder) => <FolderItem folder={folder} />);
    }
    return(<ul>{items}</ul>)
  }
}

export default FolderList;