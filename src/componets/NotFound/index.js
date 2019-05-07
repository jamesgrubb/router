import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 300%;
font-weight: 700;
color: yellow;
`

const NotFound = () => {
    return(
    <Container>
        404
    </Container>
    )
}

export { NotFound }


