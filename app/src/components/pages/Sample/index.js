import React, { useState } from "react";
// import sampleAPI from "../../../utils/sampleAPI";
import { useForm } from "react-hook-form";

const Sample = () => {
  const initialSampleState = {
    id: null,
    dateCollected: "",
    timeCollected: "",
    sampleVolume: "",
    samplePh: "",
    user: "",
    manholeIdNumber: "",
    sampleTemperature: "",
    timezone: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [sample, setSample] = useState(initialSampleState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSample({ ...sample, [name]: value });
  };

  const saveSample = () => {
    var data = {};
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("Manhole Id Number", { required: true })}>
        <option value="Site 1">Site 1</option>
        <option value="Site 2">Site 2</option>
        <option value="Site 3">Site 3</option>
        <option value="Site 4">Site 4</option>
        <option value="Site 5">Site 5</option>
        <option value="Site 6">Site 6</option>
      </select>
      <input
        type="text"
        placeholder="Date Collected"
        {...register("Date Collected", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Time Collected"
        {...register("Time Collected", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="First Name"
        {...register("First Name", { required: true, maxLength: 12 })}
      />
      <input
        type="text"
        placeholder="Temperature"
        {...register("Temperature", { required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default Sample;
