import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Card } from './components/Card/Card';
import { Article } from './interfaces/Article';
import { NewsApiResponse } from './interfaces/NewsApiResponse';

import './App.css';

function App() {
	const [articles, setArticles] = useState<Array<Article>>([]);
	const [newsSources, setNewsSources] = useState<Array<string>>(['reuters']);

	useEffect(() => {
		axios.get('https://newsapi.org/v2/top-headlines', {
			headers: {
				'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
			},
			params: {
				sources: newsSources.join()
			}
		}).then((res: AxiosResponse<NewsApiResponse>) => {
			setArticles(res.data.articles);
		});
	}, []);

	return (
		<div className="app">
			<div className="app__title">
				Just News
			</div>
			<div className="app__article-list">
				{articles.map((article, index) => {
					return <Card key={index} article={article} />
				})}
			</div>
			<footer className="app__footer">
				Made with <span role="img" aria-label="love">❤️</span> by <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/petgoldfish">Raghav Sai</a> and powered by <a rel="noopener noreferrer" target="_blank" href="https://newsapi.org">NewsApi.org</a>
			</footer>
		</div>
	);
}

export default App;
