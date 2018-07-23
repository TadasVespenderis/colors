import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Statistics from './components/Statistics';
import NotFound from './components/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Test from "./components/Test";


class AppRoutes extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/quiz" component={Quiz}/>
                    <Route path="/test" component={Test}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/statistics" component={Statistics}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
};

export default AppRoutes;