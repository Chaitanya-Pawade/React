import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './customerDetails.css';

export default function Form() {
  const [compareType, setCompareType] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    title: "",
    phone: "",
    calendar: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [serachData, setSearchData] = useState("");


  useEffect(() => {
    fetchCustomers();
  }, []);

  // get data

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/customers');
      setSubmittedData(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const deleteCustomer = async (customerId) => {
    console.log("delete clicked")
    try {
      await axios.delete(`http://localhost:4000/api/customers/${customerId}`);
      fetchCustomers();
    } catch (error) {
      console.error("Error deleting customers ", error);
    }

  };
  const handleType = (e) => {
    setCompareType(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      let newValue = value.replace(/\D+/g, ""); // remove non-digit characters
      if (newValue.length > 10) {
        newValue = newValue.substring(0, 10); // limit to 10 digits
      }
      setFormData({
        ...formData,
        [name]: newValue,
      });
    } else if (name === "calendar") {
      const selectedDate = new Date(value);
      const today = new Date();
      if (selectedDate > today) {
        setErrors({
          ...errors,
          calendar: "Date of birth cannot be in the future",
        });
        setFormData({
          ...formData,
          [name]: "",
        });
        setAge("");
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
        setErrors({
          ...errors,
          calendar: "",
        });
        calculateAge(value);
      }
    } else {
      let newValue =
        value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setAge(`${ageYears} years, ${ageMonths} months, ${ageDays} days`);
  };

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[A-Z][a-zA-Z]*$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.fname) {
      newErrors.fname = "First name is required";
    } else if (!namePattern.test(formData.fname)) {
      newErrors.fname = "First name should contain only characters";
    }
    if (!formData.mname) {
      newErrors.mname = "Middle name is required";
    } else if (!namePattern.test(formData.mname)) {
      newErrors.mname = "Middle name should contain only characters";
    }
    if (!formData.lname) {
      newErrors.lname = "Last name is required";
    } else if (!namePattern.test(formData.lname)) {
      newErrors.lname = "Last name should contain only characters";
    }
    if (!formData.phone) {
      newErrors.phone = "Mobile number is required";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Mobile number should be exactly 10 digits";
    }
    if (!formData.calendar) {
      newErrors.calendar = "Age is required";
    }
    if (!formData.address) {
      newErrors.address = "Current address is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      try {
        const newData = {
          uid: Date.now(),
          ...formData,
        };
        await axios.post('http://localhost:4000/api/customers', newData);
        fetchCustomers();
        setFormData({
          fname: "",
          mname: "",
          lname: "",
          title: "",
          phone: "",
          calendar: "",
          address: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-light" style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "20px" }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Customer Type:</label>
                <select
                  className="form-select"
                  value={compareType}
                  onChange={handleType}
                  style={{ width: "100%" }}
                >
                  <option>Select</option>
                  <option value="private">Private</option>
                  <option value="company">Company</option>
                </select>
              </div>
              {compareType === "private" && (
                <div>
                  <h2 className="mb-4">Personal Form</h2>
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="fname"
                      placeholder="Enter first name"
                      value={formData.fname}
                      onChange={handleChange}
                    />
                    {errors.fname && (
                      <div className="text-danger">{errors.fname}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Middle Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="mname"
                      placeholder="Enter middle name"
                      value={formData.mname}
                      onChange={handleChange}
                    />
                    {errors.mname && (
                      <div className="text-danger">{errors.mname}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lname"
                      placeholder="Enter last name"
                      value={formData.lname}
                      onChange={handleChange}
                    />
                    {errors.lname && (
                      <div className="text-danger">{errors.lname}</div>
                    )}
                  </div>
                  <div className="mb-3 text-center">
                    <label className="form-label mb-1">Gender:</label>
                    <div className="d-flex justify-content-center">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="title"
                          id="genderMale"
                          value="Mr"
                          checked={formData.title === "Mr"}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="genderMale"
                        >
                          Mr
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="title"
                          id="genderFemale"
                          value="Mrs"
                          checked={formData.title === "Mrs"}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="genderFemale"
                        >
                          Mrs
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={`${formData.title}. ${formData.fname} ${formData.mname} ${formData.lname}`}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile No</label>
                    <input
                      className="form-control"
                      type="tel"
                      name="phone"
                      placeholder="Enter mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="text-danger">{errors.phone}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      className="form-control"
                      type="date"
                      name="calendar"
                      value={formData.calendar}
                      onChange={handleChange}
                    />
                    {errors.calendar && (
                      <div className="text-danger">{errors.calendar}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Calculated Age:</label>
                    <input
                      className="form-control"
                      type="text"
                      value={age}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Current Address</label>
                    <textarea
                      className="form-control"
                      name="address"
                      placeholder="Enter address here.."
                      value={formData.address}
                      onChange={handleChange}
                      style={{ minHeight: "100px" }}
                    />
                    {errors.address && (
                      <div className="text-danger">{errors.address}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {compareType === "private" && (
          <div className="col-md-12 mt-3 mt-md-0">
            <div className="card bg-light" style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "20px" }}>
              <h2 className="mb-3">Customer Details</h2>
              <div className="mb-3 d-flex align-items-center">
                <input
                  className="form-control me-2"
                  placeholder="Search here.."
                  value={serachData}
                  onChange={(e) => setSearchData(e.target.value)}
                />
                <button className="btn btn-primary">Search</button>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered customer-table">
                  <thead>
                    <tr>
                      <th>Sr</th>
                      {/* <th>Uid</th> */}
                      <th>Full Name</th>
                      <th>Mobile</th>
                      <th>DOB</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submittedData
                      .filter((customer) =>
                        `${customer.fname}`.toLowerCase().includes(serachData.toLowerCase())
                      )
                      .map((customer, index) => (
                        <tr key={customer.uid}>
                          <td>{index + 1}</td>
                          {/* <td>{customer.uid}</td> */}
                          <td className="name-column">
                            {`${customer.title}. ${customer.fname} ${customer.mname} ${customer.lname}`}
                          </td>
                          <td>{customer.phone}</td>
                          <td>{customer.calendar}</td>
                          <td>{customer.address}</td>
                          <td className="text-center">
                            <div className="btn-group" role="group" aria-label="Customer Actions">
                              <button className="btn btn-primary me-1">Edit</button>
                              <button onClick={() => deleteCustomer(customer.uid)} className="btn btn-danger">Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
