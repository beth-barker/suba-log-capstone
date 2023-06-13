import {useEffect, useContext, useState} from 'react';
//import './DiveCard.css';
import axios from 'axios';
import AuthContext from '../store/authContext';
import { useNavigate } from 'react-router-dom';

function DiveCard() {
    const navigate = useNavigate();
    const {userId} = useContext(AuthContext);

    const [dives, setDives] = useState([]);
    const [search, setSearch] = useState('');



    const getUserPosts = () => {
        axios.get(`/api/userDives/${userId}`)
        .then(res => {setDives(res.data)})
        .catch(err => console.log(err))
    }
    
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
            <div key={dive.id} className='flex flex-col items-center border-2 border-gray-300 w-3/12 rounded-lg' onClick={() => {navigate(`/dives/${dive.id}`)}}>
                <img className='h-4/6 w-full' src={dive.img} alt="whaleshark" />
                    <h2 className='mt-5 font-bold text-lg'>{dive.diveSite}</h2>
                    <h3 className='mt-5'>{dive.city}, {dive.country.name}</h3>
                    <h3 className='mt-5 mb-5'>{dive.date}</h3>
            </div>
        );
    })

    return (
        <main>
            <span className='flex justify-end m-8 mx-28'>
                <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder=" Filter Dive by Country"
                className='border-b-2'
                />
            </span>
            <div className='flex flex-wrap justify-evenly mt-10'>
                {mappedDives ? mappedDives : <h2>No Dives Logged</h2>}
            </div>
        </main>
    )
}

export default DiveCard;