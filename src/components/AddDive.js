import React from 'react';
import './addDive.css'

function AddDive( ) {
    return (
        <div>
            Add a new dive!

            <form className='dive-form'>
                <input type="text" placeholder='Dive Site'/>
                <select name="" id="">Country</select>
                <input type="Date"/>
                <input type="text" placeholder='Dive duration in minutes'/>
                <input type="text" placeholder='Max Depth in Meters'/>
                <input type="text" placeholder='Visibility in Metes'/>
                <input type="file" placeholder='img url'/>
                <input type="text" placeholder='Dive notes'/>
            </form>
        </div>
    );
}

export default AddDive;