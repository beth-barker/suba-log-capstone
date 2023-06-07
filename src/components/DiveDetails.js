import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DiveDetails() {
    const {id} = useParams();

    const [dive, setDive] = useState({});

    const getId = (() => {
        axios.get(`/api/details/${id}`)
        .then((res) => {
            setDive(res.data);
            console.log(res.data);
        }).catch(err => console.log(err))
    })


    useEffect(() => {
        getId()
    }, [])
    console.log(dive)
    return (
        <>
        <div className='dive-card'>
        <img className="dive-img" src={dive.img} alt="whaleshark" />
        <h2>Dive Site: {dive.diveSite}</h2>
        <h3>{dive.city}, {dive.country?.name}</h3>
        <h3>Date: {dive.date}</h3>
        <h3>Duration: {dive.duration} minutes</h3>
        <h3>Max Depth: {dive.depth} meters</h3>
        <h3>Visibility: {dive.visibility} meters</h3>
        <h3>Notes: {dive.notes}</h3>
    </div>
    </>
    );
}

export default DiveDetails;