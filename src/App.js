import React, { useState } from 'react';
import { Card } from './components/Card/Card';

function App() {
	const [state, setState] = useState({
		title: "Test Title",
		summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut tenetur ratione perferendis veritatis voluptatibus ipsa quibusdam sit blanditiis incidunt deleniti pariatur maiores alias, a quisquam, nam exercitationem eaque, sapiente quae!",
		imgSrc: "https://s3.reutersmedia.net/resources/r/?m=02&d=20200326&t=2&i=1508518991&w=1200&r=LYNXMPEG2P18P"
	});

	return (
		<div>
			<h1>Hello World!</h1>
			<Card data={state} />
		</div>
	);
}

export default App;
