import React from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import ArticleFilter from './components/ArticleFilter/ArticleFilter';
import ArticleContextProvider from './contexts/ArticleContext';

import './App.css';

function App() {
	return (
		<div className="app">
			<div className="app__title">Just News</div>
			<ArticleContextProvider>
				<ArticleFilter />
				<ArticleList />
			</ArticleContextProvider>
			<footer className="app__footer">
				Made with{' '}
				<span role="img" aria-label="love">
					❤️
				</span>{' '}
				by{' '}
				<a className="app__footer__link" rel="noopener noreferrer" target="_blank" href="https://www.github.com/petgoldfish">
					Raghav Sai
				</a>{' '}
				and powered by{' '}
				<a className="app__footer__link" rel="noopener noreferrer" target="_blank" href="https://newsapi.org">
					NewsApi.org
				</a>
			</footer>
		</div>
	);
}

export default App;
