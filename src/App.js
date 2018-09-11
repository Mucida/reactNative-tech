import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
	return( //can only ahve on child
		<Provider store={createStore(reducers)}> 
			<View style={{ flex: 1 }}>
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;

/*
Data -> reducers
reducers produces app states, and states holds the apps data
*/