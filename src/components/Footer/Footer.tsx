import React from 'react';

export const Footer = () => {
	return (
		<footer className="app__footer">
			Made with{' '}
			<span role="img" aria-label="love">
				❤️
			</span>{' '}
			by{' '}
			<a
				className="app__footer__link"
				rel="noopener noreferrer"
				target="_blank"
				href="https://www.github.com/petgoldfish"
			>
				Raghav Sai
			</a>{' '}
			and powered by{' '}
			<a className="app__footer__link" rel="noopener noreferrer" target="_blank" href="https://newsapi.org">
				NewsApi.org
			</a>
			<br />
			<a
				className="app__footer__link"
				rel="noopener noreferrer"
				target="_blank"
				href="https://icons8.com/icons/set/news"
			>
				News icon
			</a>{' '}
			icon by{' '}
			<a className="app__footer__link" rel="noopener noreferrer" target="_blank" href="https://icons8.com">
				Icons8
			</a>
		</footer>
	);
};

export default Footer;
