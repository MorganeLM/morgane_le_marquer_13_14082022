import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateProfile } from '../redux/redux';


function WelcomeBanner() {
    // display welcome
    const firstName = useSelector(state => state.user.firstName);
    const lastName = useSelector(state => state.user.lastName);
    // manage editing
    const token = useSelector(state => state.login.token);
    const [isEditing, setIsEditing] = useState(false);
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        setNewFirstName(firstName);
    }, [firstName])
    useEffect(() => {
        setNewLastName(lastName);
    }, [lastName])

    const handleClick = function(){
        setIsEditing(!isEditing)
    }

    const handleSubmit = function(e){
        e.preventDefault();
        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: { Authorization: "Bearer " + token, "Content-Type": "application/json"},
            body: JSON.stringify({
              firstName: newFirstName,
              lastName: newLastName
            })
          })
          .then(async response => {
            let data = await response.json();
            dispatch(updateProfile(data.body));
            setIsEditing(false);
            setError('');
          })
          .catch(error => {
            setError(error.toString());
            console.error(error)
          })
    }



    return (
   <>{ isEditing ?
        <div className="header">
            <h1>Welcome back</h1>
            <form className='user-update-form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="firstname" placeholder={firstName} onChange={e => setNewFirstName(e.target.value)}></input>
                    <input type="text" id="lastname" placeholder={lastName} onChange={e => setNewLastName(e.target.value)}></input>          
                </div>
                <div>
                    <button type='submit'>Save</button>
                    <button onClick={handleClick}>Cancel</button>
                </div>
                {
                    error === "" ?
                    "" :
                    <div className="error-text">
                        {error}
                    </div>
                }
            </form>
        </div>
        : 
        <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <button className="edit-button" onClick={handleClick}>Edit Name</button>
        </div> 
    }
    </>
    );
  }
  
  export default WelcomeBanner;