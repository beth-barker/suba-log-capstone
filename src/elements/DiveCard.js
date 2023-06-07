import {useEffect, useContext, useCallback, useState} from 'react';
import './DiveCard.css';
import axios from 'axios';
import AuthContext from '../store/authContext';
import { useNavigate } from 'react-router-dom';

function DiveCard() {
    const navigate = useNavigate();
    const {userId} = useContext(AuthContext);

    const [dives, setDives] = useState([]);
    const [search, setSearch] = useState('');



    const getUserPosts = useCallback(() => {
        axios.get(`/api/userDives/${userId}`)
        .then(res => {setDives(res.data)})
        .catch(err => console.log(err))
    })
    
    useEffect (() => {
        getUserPosts()
    }, [])

    console.log("HI", dives)
    console.log("SEARCH", search)
    const mappedDives = dives.filter((dive, index) => {
        let countryName = dive.country.name.toLowerCase();
        let searchParams = search.toLowerCase();
        return countryName.includes(searchParams)
    }).map(dive => {
        return (
            <div key={dive.id} className='dive-card' onClick={() => {navigate(`/dives/${dive.id}`)}}>
                <img className="dive-img" src={dive.img} alt="whaleshark" />
                <h2>{dive.diveSite}</h2>
                <h3>{dive.city}, {dive.country.name}</h3>
                <h3>{dive.date}</h3>
            </div>
        );
    })

    return (
        <main>
            <span>
                <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter Dive by Country"
                />
            </span>
            <div className='dive-display'>
                {mappedDives ? mappedDives : <h2>No Dives Logged</h2>}
            </div>
        </main>
    )
}

export default DiveCard;