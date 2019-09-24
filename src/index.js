import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/estilos.css";
import {BrowserRouter, Route, Switch, } from "react-router-dom";
import PageInicio from "./components/pages/PageInicio";
import PageTest1 from "./components/pages/PageTest1";
import PageTest2 from "./components/pages/PageTest2";



const App = () => (

<BrowserRouter>
    <Switch>
        <Route exact path ="/" componet={PageInicio}/>
        <Route exact path = "/pagetest1" componet={PageTest1}/>
        <Route exact path = "/pagetest2" componet={PageTest2}/>
    </Switch>
</BrowserRouter>







)

ReactDOM.render(<App />, document.getElementById('root'));


