import React, { useState, createContext, useEffect } from 'react';
import Article from '../interfaces/Article';
import Source from '../interfaces/Source';
import { getArticles, getNewsSources } from '../utils/util';

type ArticleContextType = {
	articles: Array<Article>,
	newsSources: Array<Source>,
	selectedSources: Array<string>,
	setSelectedSources: Function,
	setSearchTerm: Function
};

export const ArticleContext = createContext<ArticleContextType>({
	articles: [],
	newsSources: [],
	selectedSources: [],
	setSelectedSources: () => ['reuters'],
	setSearchTerm: () => undefined
});

const ArticleContextProvider = (props: any) => {
	const [articles, setArticles] = useState<Array<Article>>([]);
	const [newsSources, setNewsSources] = useState<Array<Source>>([]);
	const [selectedSources, setSelectedSources] = useState<Array<string>>(['reuters']);
	const [searchTerm, setSearchTerm] = useState<string | undefined>();

	useEffect(() => {
		getNewsSources().then(res => setNewsSources(res.data.sources));
	}, []);

	useEffect(() => {
		getArticles({
			sources: selectedSources.join(),
			q: searchTerm
		}).then(res => setArticles(res.data.articles));
	}, [selectedSources, searchTerm]);


	return (
		<ArticleContext.Provider value={{
			articles,
			newsSources,
			selectedSources,
			setSelectedSources,
			setSearchTerm
		}}>
			{props.children}
		</ArticleContext.Provider>
	)
};

export default ArticleContextProvider;