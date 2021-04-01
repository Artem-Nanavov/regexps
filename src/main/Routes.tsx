import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {compose} from 'redux';
import {hot} from 'react-hot-loader/root';
import HomePage from 'modules/HomePage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
	</Switch>
);

export default compose<typeof React.Component>(hot)(Routes);
