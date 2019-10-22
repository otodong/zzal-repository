import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import pages
import { MainContent, SignInPage, SignUpPage } from '../pages'

const RootRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainContent} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
        </Switch>
    );
};

export default RootRouter;