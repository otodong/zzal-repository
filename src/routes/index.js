import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import pages
import { MainContent, SignInPage, SignUpPage, RepositoryPage } from '../pages'

const RootRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainContent} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/zzal" component={RepositoryPage} />
            <Route path="/board" component={RepositoryPage} />
            <Route path="/fnq" component={RepositoryPage} />
        </Switch>
    );
};

export default RootRouter;