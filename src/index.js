import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>
);
