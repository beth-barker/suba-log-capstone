
import './addDive.css';
import axios from 'axios';
import {Formik} from 'formik';

function AddDive( ) {

    const initialValues = {
        diveSite: '',
        date: '',
        duration: '',
        maxDepth: '',
        visibility: '',
        img: '',
        notes: '',
        countryId: ''
    }

    const onSubmit = (values) => {
        console.log(values)
        // axios.post('/dives', values)
        // .then((res) => {
        //     console.log(res.data)
        // }).catch((err) => {
        //     console.log(err)
        // })
    }


    return (
        <div>
            <h1>Add a new dive!</h1>

            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({values, handleSubmit, handleChange}) => (
                    <form className='dive-form' onSubmit={handleSubmit}>
                    <input
                        type="text" 
                        placeholder='Dive Site'
                        value={values.diveSite}
                        onChange={handleChange}
                        name='diveSite'
                    />
                    <select
                        placeholder='Country ID'
                        value={values.countryId}
                        onChange={handleChange}
                        name='countryId'
                    >
                        <option value="country">Country</option>
                    </select>
                    <input
                        type="date" 
                        placeholder='Date of Dive'
                        value={values.date}
                        onChange={handleChange}
                        name='date'
                    />
                    <input
                        type="text" 
                        placeholder='Dive Duration in Minutes'
                        value={values.duration}
                        onChange={handleChange}
                        name='duration'
                    />
                    <input
                        type="text" 
                        placeholder='Max Depth in Meters'
                        value={values.maxDepth}
                        onChange={handleChange}
                        name='maxDepth'
                    />
                     <input
                        type="text" 
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