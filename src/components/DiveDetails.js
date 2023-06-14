import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function DiveDetails() {
  const { id } = useParams();

  const [dive, setDive] = useState({});

  const getId = () => {
    axios
      .get(`/api/details/${id}`)
      .then((res) => {
        setDive(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getId();
  }, []);

  console.log(dive.date)
  let displayStr

  if(dive.date){

    const fullStr = new Date(dive.date);
  
    console.log(fullStr.getMonth())
  
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
  
        displayStr = `${monthNames[fullStr.getMonth()]} ${dive.date[8]}${
          dive.date[9]
        }, ${dive.date[0]}${dive.date[1]}${dive.date[2]}${dive.date[3]}`;
  }

      console.log(displayStr)

  
  return (
    <div className='flex m-10 items-center h-[70vh]' >
      <div className="flex flex-col items-center justify-evenly w-7/12 h-4/5">
        <img className="object-cover rounded-3xl border border-gray-400" src={dive.img} alt="whaleshark" />
      </div>
      <div  className="w-6/12 flex flex-col items-center justify-center border m-10 p-5 bg-bp rounded-lg border-gray-400">
        <h2 className="font-bold text-2xl underline mb-5">{dive.diveSite}</h2>
        <h3 className="mb-1">
          {dive.city}, {dive.country?.name}
        </h3>
        <h3 className="mb-1">Date: {displayStr}</h3>
        <h3 className="mb-1">Duration: {dive.duration} minutes</h3>
        <h3 className="mb-1">Max Depth: {dive.depth} meters</h3>
        <h3 className="mb-1">Visibility: {dive.visibility} meters</h3>
        <h3 className="mt-5 mb-5">Notes: {dive.notes}</h3>
      </div>
    </div>
  );
}

export default DiveDetails;
