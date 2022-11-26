import React from 'react';

import Header from './components/Header';
import Main from './components/Main';

import './assets/normalize.scss';
import './styles.scss';

const App: React.FC = () => (
	<>
		<Header />
		<Main />
	</>
);

export default App;
