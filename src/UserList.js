import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiHomeAlt } from "react-icons/bi"
import { TbWorldWww } from "react-icons/tb"
import { FiPhone } from "react-icons/fi"
import { TbMail } from "react-icons/tb"

//  defining the UserList component and set up the initial state for the list of users
function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [error, setError] = useState(null);

    //  use the useEffect hook to make an HTTP GET request to  the jsonplaceholder API
    // and update the state with the response data:
    useEffect(() => {
        function fetchUser() {
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((res) => setListOfUsers(res.data))
                .catch((error) => setError(error));
        }
        fetchUser();
    }, []);

    return (
        <div className='all'>
            <h1 style={{ marginLeft: 240, color: "#0f4374" }}>List of Users</h1>
            {listOfUsers.map(user => (
                <div className='block'>
                    <div key={user.id} className='container'>
                        {/*using the map method to display the list of users on the screen  */}

                        <div className='flex'>
                            <div className="left">
                                <h3> {user.name} </h3>
                                <h5>({user.username})</h5>
                                <div className="adress">
                                    <BiHomeAlt className="text-xl " />
                                    <div >
                                        {user.address.suite}, {user.address.street}, {user.address.city}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="info ">
                            <p className="email">
                                <TbMail />   {user.email}
                            </p>

                            <p className="phone">
                                <FiPhone /> {user.phone}
                            </p>

                            <a href={`https://${user.website}/`} >
                                <TbWorldWww /> {user.website}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default UserList;
