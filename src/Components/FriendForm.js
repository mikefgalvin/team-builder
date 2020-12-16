import React from "react";
import styled from 'styled-components';

export default function Form(props) {

    const { formValues, change, submit, member } = props;

  return (
    <div>
        <div>
            <h1> Friends </h1>
        </div>
        <form onSubmit={submit}>
            <label>
            Name:
            <StyledInput
            type='text' 
            name='fname' 
            value={formValues.fname}
            onChange={change}
            />
            </label>
            <label>
            Email:
            <StyledInput 
            type='email'
            name='email' 
            value={formValues.email}
            onChange={change}
            />
            </label>
            <label>
            Role:
            <StyledInput 
            type='text'
            name='role' 
            value={formValues.role}
            onChange={change}
            />
            </label>
            <StyledButton className='friendSubmit'>
            <button>Submit</button>
            </StyledButton>
        </form>
    <h4> Name: {formValues.fname} Email: {formValues.email} Role: {formValues.role}</h4>
  </div>
  );
    }

const StyledInput = styled.input`
  font-size: 14px;
  padding: 3px 4px;
  border-width: 1px;
  border-style: double;
  margin: 0;
`
const StyledButton = styled.div`
  padding: 2%;
`

