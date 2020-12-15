import React from "react";

export default function Form(props) {

    const { formValues, change, submit } = props;

  return (
    <div>
        <div>
            <h1> Friends </h1>
        </div>
        <form onSubmit={submit}>
            <label>
            Name:
            <input
            type='text' 
            name='fname' 
            value={formValues.fname}
            onChange={change}
            />
            </label>
            <label>
            Email:
            <input 
            type='email'
            name='email' 
            value={formValues.email}
            onChange={change}
            />
            </label>
            <label>
            Role:
            <input 
            type='text'
            name='role' 
            value={formValues.role}
            onChange={change}
            />
            </label>
            <div className='friendSubmit'>
            <button>Submit</button>
            </div>
        </form>
    <h4> Name: {formValues.fname} Email: {formValues.email} Role: {formValues.role}</h4>
  </div>
  );
    }