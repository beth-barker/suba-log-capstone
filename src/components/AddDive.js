
import './addDive.css';
import axios from 'axios';
import {Formik} from 'formik';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../store/authContext';
import { useNavigate } from 'react-router-dom';

function AddDive( ) {
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)

    const [countries, setCountries] = useState([]);

    const initialValues = {
        diveSite: '',
        date: '',
        duration: '',
        maxDepth: '',
        visibility: '',
        img: '',
        notes: '',
        countryId: '',
        city: ''
    }

    const onSubmit = (values) => {
        console.log(values)
        values.userId = authCtx.userId
        axios.post('/api/dives', values)
        .then((res) => {
            console.log(res.data)
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }


    useEffect (() => {
        axios.get('/api/countries')
        .then((res) => {
            setCountries(res.data)
            console.log(setCountries)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div>
            <h1>Add a new dive!</h1>

            <Formik initialValues={initialValues} onSubmit={onSubmit} className=''>
                {({values, handleSubmit, handleChange}) => (
                    <form className='dive-form' onSubmit={handleSubmit}>
                    <input
                        type="text" 
                        placeholder='Dive Site'
                        value={values.diveSite}
                        onChange={handleChange}
                        name='diveSite'
                    />
                    <input
                        type="text" 
                        placeholder='City/Region'
                        value={values.city}
                        onChange={handleChange}
                        name='city'
                    />
                    <select
                        placeholder='Country ID'
                        value={values.id}
                        onChange={handleChange}
                        name='countryId'
                    >
                        <option disabled selected hidden>Choose Country</option>
                       {countries.map((country) => <option value={country.id}>{country.name}</option>)}
                    </select>
                    <input
                        type="date" 
                        placeholder='Date of Dive'
                        value={values.date}
                        onChange={handleChange}
                        name='date'
                    />
                    <input
                        type="number" 
                        placeholder='Dive Duration in Minutes'
                        value={values.duration}
                        onChange={handleChange}
                        name='duration'
                    />
                    <input
                        type="number" 
                        placeholder='Max Depth in Meters'
                        value={values.maxDepth}
                        onChange={handleChange}
                        name='maxDepth'
                    />
                     <input
                        type="number" 
                        placeholder='Visibility in Meters'
                        value={values.visibility}
                        onChange={handleChange}
                        name='visibility'
                    />
                    <input
                        type="text" 
                        placeholder='Image URL'
                        value={values.img}
                        onChange={handleChange}
                        name='img'
                    />
                    <input
                        type="text" 
                        placeholder='Dive Notes'
                        value={values.notes}
                        onChange={handleChange}
                        name='notes'
                    />
                    <button type='submit'>Add Dive to Log</button>
                    
                    </form>

                )}    
            </Formik>
        </div>
    );
}

export default AddDive;