import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
	renderItem(library) {

	}

	render() {
		return(
			<FlatList 
				data={this.props.librarie}
				renderItem={this.renderItem}
				keyExtractor={(library) => library.id}
			/>
		);
	}
}

const mapStateToProps = state =>{
	return { libraries: state.libraries }; //this becomes a prop to the component
};

export default connect(mapStateToProps)(LibraryList);
//this line above (connect) becomes a link betwen libraryList and application state
//connection between react side and redux side