import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import 'resources/styles/nullstyle.css';
import 'resources/styles/index.scss';

render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.getElementById('app'),
);
