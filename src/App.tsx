import React from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import ArticleFilter from './components/ArticleFilter/ArticleFilter';
import ArticleContextProvider from './contexts/ArticleContext';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
	return (
		<div className="app">
			<div className="app__title">Just News</div>
			<ArticleContextProvider>
				<ArticleFilter />
				<ArticleList />
			</ArticleContextProvider>
			<Footer />
		</div>
	);
}

export default App;
