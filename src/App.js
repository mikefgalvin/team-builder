import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import axios from './Axios';
import FriendForm from './Components/FriendForm';
import FriendCard from './Components/Friend';

function App() {

  const defaultFormValue = {
    fname: '',
    email: '',
    role: '',
  }

  const [formValues, setFormValues] = useState(defaultFormValue);
  const [friends, setFriends] = useState([]);

  const onInputChange = evt => {

    const { name, value } = evt.target;
    
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const SubmitFriendForm = (evt) => {

    evt.preventDefault();

    const newFriend = {
    name: formValues.fname.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim(),
  }

  if (!newFriend.name || !newFriend.email || !newFriend.role) return;

  axios
      .post("fakeapi.com", newFriend)
      .then((res) => {
        setFriends([...friends, res.data]); // equivalent of using .concat method (index.js)
        //  d) also on success clear the form
        setFormValues(defaultFormValue);
      })
      .catch((err) => {
        debugger;
      });
     };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setFriends(res.data));
  }, []);

  // setFriends([newFriend, ...friends]);
  // setFormValues(defaultFormValue);

// };



  return (
    <div className="App">
      <FriendForm formValues={formValues} change={onInputChange} submit={SubmitFriendForm} />
      <div>
        <h2>Team</h2>
        {friends.map((friend) => {
        return <FriendCard key={friend.id} details={friend} />;
      })}
      </div>

    </div>
  );
}

export default App;
