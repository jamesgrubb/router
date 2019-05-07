import React from 'react';
import { Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
max-width: 80vw;
margin: 0 auto;
`
const Li = styled.li`
    color: var(--color);
    font-size: 300%;
    text-transform: uppercase;
`

const User = (props) => {
    console.log(`loging ${props}`)
return(
props.match.params.id
)
};

const users = ( { match } ) => {
    console.log(match)
return(
    <div>
    <h1>Users</h1>
    <strong>Select a user</strong>
    <Container>
    <ul>
        <Li><Link to="`${match.url}/1`">User 1</Link></Li>       
        <li><Link to="${match.url}/2">User 2</Link></li>
        <li><Link to="${match.url}/3">User 3</Link></li>
    </ul>
    <p>{<Route path="`${match.path}/:id`" component={User} />}</p>
    </Container>
    </div>
)
}

export default users