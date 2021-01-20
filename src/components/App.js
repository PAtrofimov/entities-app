import React from 'react';
import configureStore, { history } from '../redux/configureStore';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import EntitiesContainer from '../containers/EntitiesContainer';
import NotFound from './NotFound';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router>
                <Switch>
                    <Route exact path="/" component={EntitiesContainer} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ConnectedRouter>
    </Provider>
);

export default App;
