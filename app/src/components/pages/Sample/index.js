import React, { useState } from "react";

import sampleAPI from "../../../utils/sampleAPI";

const Sample = () => {
  const [sampleValue, setSampleValue] = useState({
    id: null,
    dateCollected: "",
    timeCollected: "",
    sampleVolume: "",
    samplePh: "",
    user: "",
    manholeIdNumber: "",
    sampleTemperature: "",
    locationName: "",
  });

  const [allSamples, setAllSamples] = useState([])

  const handleChange = (e) => {
    setSampleValue(e.currentTarget.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sampleAPI.addSample({ sample: sampleValue});
      setAllSamples((list) => {
        return[...list, res.data]
        setSampleValue({sample: ''})
      })
    } catch (error) {
      console.log.error("Error adding sample", error);
    }
  };

  return <form handlesubmit={handlesubmit(handlesubmit)}>form</form>;
};

export default Sample;
// dateCollected: req.body.dateCollected,
// timeCollected: req.body.timeCollected,
// sampleVolume: req.body.sampleVolume,
// samplePh: req.body.samplePh,
// user: req.body.user,
// manholeIdNumber: req.body.manholeIdNumber,
// sampleTemperature: req.body.sampleTemperature,
// Location Name [as a drop down]

// timezone seletion

//  sampling methond 4 radio buttons

// sample date and timezone
// sample collection and processing information

//temp yes /no

//transpprt yes/no

// name of person filling out form

// notes
