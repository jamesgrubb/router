import React from 'react';

const handleSubmit = ( event, props ) => {
    console.log(props)
    event.preventDefault();
    props.history.push('/')
}

const contact = ( props ) => {
console.log(props.history.push("/"))
    return(
        <React.Fragment>
        <h1>Contact</h1>
        <form onSubmit={() => handleSubmit(props)}>
            <input type="name" placeholder="name" />
            <input type="email" palceholder="email"/>
            <button type="submit">Submit</button>
        </form>
        </React.Fragment>
    )
}

export default contact;