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

const HiddenInput = styled.input.attrs({
    name : "form-name",
    value : "contact"
})

const TextInput = styled.input.attrs({
})
`
padding: 2em;

`

const FormWarapper = () => {

    <Form>
        <HiddenInput />
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

}

export default FormWarapper