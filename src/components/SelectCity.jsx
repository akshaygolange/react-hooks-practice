import React, { useState } from "react";

const SelectCity = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
  });

  const handleNameChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, name: e.target.value });
  };

  const handleCityChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name here.."
        value={formData.name}
        onChange={handleNameChange}
      />

      <select
        onChange={handleCityChange}
        value={formData.city}
        name="city"
        id="city"
      >
        <option value="">Select City</option>
        <option value={"nagpur"}>Nagpur</option>
        <option value="mumbai">Mumbai</option>
        <option value="pune">Pune</option>
        <option value="delhi">Delhi</option>
      </select>

      <div>
        <h2> Name - {formData.name}</h2>
        <h2> City - {formData.city}</h2>
      </div>
    </div>
  );
};

export default SelectCity;
