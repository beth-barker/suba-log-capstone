import {useEffect, useContext, useCallback, useState} from 'react';
import './DiveCard.css';
import axios from 'axios';
import AuthContext from '../store/authContext';
import { useNavigate } from 'react-router-dom';

function DiveCard() {
    const navigate = useNavigate();
    const {userId} = useContext(AuthContext);

    const [dives, setDives] = useState([]);



    const getUserPosts = useCallback(() => {
        axios.get(`/api/userDives/${userId}`)
        .then(res => {setDives(res.data)})
        .catch(err => console.log(err))
    })
    
    useEffect (() => {
        getUserPosts()
    }, [])

    console.log("HI", dives)
    const mappedDives = dives.map(dive => {
        return (
            <div key={dive.id} className='dive-card'>
                <img className="dive-img" src={dive.img} alt="whaleshark" />
                <h2>Dive Site: {dive.diveSite}</h2>
                <h3>{dive.city}, {dive.country.name}</h3>
                <h3>Date: {dive.date}</h3>
                <button onClick={() => {navigate(`/dives/${dive.id}`)}}>More Dive Details</button>
            </div>
        );
    })

    return mappedDives.length >=1 ? (
        <main>
            {mappedDives}
        </main>
    ) : (
        <main>
            <h1>You haven't logged any dives yet!</h1>
        </main>
    )
}

export default DiveCard;