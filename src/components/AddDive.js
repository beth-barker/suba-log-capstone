
//import './addDive.css';
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
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({values, handleSubmit, handleChange}) => (
                    <div className='flex justify-center p-10'>
                    <form className='flex flex-col items-center border p-10 w-5/12 bg-bp rounded-3xl' onSubmit={handleSubmit}>
                        <div>
                            <h1 className='font-medium text-3xl mb-5'>Log a New Dive</h1>
                        </div>

                    <input
                        type="text" 
                        id='site'
                        placeholder='Dive Site'
                        value={values.diveSite}
                        onChange={handleChange}
                        name='diveSite'
                        className='border border-gray-400 mt-4 w-full px-2'
                    />
                    <input
                        type="text" 
                        placeholder=' City/Region'
                        value={values.city}
                        onChange={handleChange}
                        name='city'
                        className='border border-gray-400 mt-4 w-full px-2'
                    />
                    <select
                        placeholder=' Country ID'
                        value={values.id}
                        onChange={handleChange}
                        name='countryId'
                        className='border border-gray-400 mt-4 w-full px-2'
                    >
                        <option disabled selected hidden> Choose Country</option>
                       {countries.map((country) => <option value={country.id}>{country.name}</option>)}
                    </select>
                    <input
                        type="date" 
                        placeholder=' Date of Dive'
                        value={values.date}
                        onChange={handleChange}
                        name='date'
                        className='border border-gray-400 mt-4 w-full px-2'
                    />
                    <div className=''>
                    <input
                        type="number" 
                        placeholder=' Duration(Minutes)'
                        value={values.duration}
                        onChange={handleChange}
                        name='duration'
                        className='border border-gray-400 mt-4 mx-2'
                    />
                    <input
                        type="number" 
                        placeholder=' Max Depth(Meters)'
                        value={values.maxDepth}
                        onChange={handleChange}
                        name='maxDepth'
                        className=' border border-gray-400 mt-4 mx-2'
                    />
                     <input
                        type="number" 
                        placeholder=' Visibility(Meters)'
                        value={values.visibility}
                        onChange={handleChange}
                        name='visibility'
                        className='border border-gray-400 mt-4 mx-2'
                    />
                    </div>
                    <input
                        type="text" 
                        placeholder=' Image URL'
                        value={values.img}
                        onChange={handleChange}
                        name='img'
                        className='border border-gray-400 mt-4 w-full px-2'
                    />
                    <textarea
                        rows="5"
                        placeholder=' Dive Notes'
                        value={values.notes}
                        onChange={handleChange}
                        name='notes'
                        className='border border-gray-400 mt-4 w-full px-2'
                    />
                    <div className='flex justify-center w-full'>
                        <button type='submit' className='border-none w-4/12 mt-5 rounded px-4 bg-lighto font-medium text-lg'>Add Dive</button>
                    </div>
                    
                    </form>
                    </div>

                )}    
            </Formik>
        </div>
    );
}

export default AddDive;