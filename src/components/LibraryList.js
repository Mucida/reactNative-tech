import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	renderItem(library) {
		return <ListItem library={library} />;
	}

	render() {
		return(
			<FlatList 
				data={this.props.libraries}
				renderItem={({item}) => this.renderItem(item)}
				keyExtractor={(library) => library.id.toString()}
			/>
		);
	}
}

const mapStateToProps = state => {
	return { libraries: state.libraries }; //this becomes a prop to the component
};

export default connect(mapStateToProps)(LibraryList);
//this line above (connect) becomes a link betwen libraryList and application state
//connection between react side and redux side