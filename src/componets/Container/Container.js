import styled from 'styled-components'
import { color } from 'styled-system'
const Container = styled.div`
display: grid;
grid-template-columns: [nav] 1fr [content] 3fr;
width: 100%;
height: 100vh;
${color};

`



export { Container } 