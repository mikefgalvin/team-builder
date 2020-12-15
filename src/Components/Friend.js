import React from "react";
import styled from 'styled-components';

export default function FriendCard(props) {

    const { details } = props;

    if (!details) { 
        return <h3>Fetching the Friend details</h3>
    }

  return (

    <FriendCardStyle>
        <h2>{details.name}</h2>
        <h3>{details.email}</h3>
        <h3>{details.role}</h3>
    </FriendCardStyle>

    );
}

const FriendCardStyle = styled.div`
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    background-color: lightblue;
    max-width: 80%;
    margin: 0 auto;
`