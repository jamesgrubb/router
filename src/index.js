import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// COMPONENTS
import { Container } from './componets/Container/Container';
import Users from './componets/Users/index';
import Contacts from './componets/Contact/index';
import App from './App';
import { NotFound } from './componets/NotFound'
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import theme from './theme';

const GlobalStyles = createGlobalStyle`

:root{
    --color: red;
}

.active{
    color: var(--color)
}

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');
html, body{
    font-size: 80%;
    font-family: 'Montserrat';
    background: blue;
}
h1{
    color: yellow;
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
}
ul{
    width: 100%;
    padding: 1em;
    background: cornflowerblue;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    list-style: none;
    color: blue;
}
li{

    color: inherit;
}
a{
    color: inherit;
    text-decoration: none;
}
`


const Routing = () => {
return(

    <Router>
        <div>
            <Container>
            <ul>
                <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/Users">Users</NavLink></li>
                <li><NavLink activeClassName="active" to="/Contact">Contact</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/Users" component={Users} />
                <Route path="/Contact" component={Contacts} />
                <Route component={NotFound} />
            </Switch>
            </Container>
        </div>
    </Router>
)

}
ReactDOM.render(<React.Fragment><GlobalStyles /><ThemeProvider theme={theme}><Routing /></ThemeProvider></React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
