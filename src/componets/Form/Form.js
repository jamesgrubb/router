import React from 'react';
import styled from 'styled-components';

const Form = styled.form.attrs({
    name: "contact",
    method: "post"
})`
max-width: 80vw;
`

const Label = styled.label`
text-transform: uppercase;
`

const HiddenInput = styled.input`
`

const TextInput = styled.input`
padding: 2em;
`

const FormWarapper = () => {
return(
    <Form>
        <HiddenInput type="hidden" name="form-name" value="contact"/>
        <p>
            <Label>
                Your Name {<TextInput name="name" type="text" />}
            </Label>
            </p>
            <p>
                <Label>
                    Your Email {<TextInput name="email" type="email" />}
                </Label>
            </p>
            <p>
                <button type="submit">Submit</button>
                </p>
    </Form>
)
}

export default FormWarapper