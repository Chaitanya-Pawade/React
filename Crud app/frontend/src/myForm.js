import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";


//todo ==> first step
export default function MyForm() {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        dob: "",
        gender: "",
        address: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((preInput) => ({
            ...preInput,
            [name]: value
        }))
    }


    const validateForm = () => {
        const newErrors = {};
        const phonePattern = /^[0-9]{10}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!input.firstname.trim()) {
            newErrors.firstname = "first name is required"
        }
        if (!input.lastname.trim()) {
            newErrors.lastname = "last name is required"
        }
        if (!input.phonenumber.trim()) {
            newErrors.phonenumber = "phone number is required"
        } else if (!phonePattern.test(input.phonenumber)) {
            newErrors.phonenumber = "Mobile number must be exactly 10 digits"
        }
        if (!input.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!emailPattern.test(input.email)) {
            newErrors.email = "email id should be as per pattern"
        }
        if (!input.address.trim()) {
            newErrors.address = "address is required"
        }
        if (!input.dob.trim()) {
            newErrors.dob = "DOB is required"
        }
        if (!input.gender.trim()) {
            newErrors.gender = "Gender is required"
        }
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({})
        }
    }
    return (
        <>
            {/* //todo==> second step */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name -</label>
                                <input type="text" name="firstname" value={input.firstname} onChange={handleChange} className="form-control">
                                </input>
                            </div>
                            {errors.firstname &&
                                <p className="text-danger">{errors.firstname}</p>
                            }
                            <div className="form-group">
                                <label>Last Name -</label>
                                <input type="text" name="lastname" value={input.lastname} onChange={handleChange} className="form-control">
                                </input>
                            </div>

                            {errors.lastname &&
                                <p className="text-danger">{errors.lastname}</p>
                            }
                            <div className="form-group">
                                <label>Phone Number-</label>
                                <input type="tel" name="phonenumber" value={input.phonenumber} onChange={handleChange} className="form-control">
                                </input>
                            </div>

                            {errors.phonenumber &&
                                <p className="text-danger">{errors.phonenumber}</p>
                            }
                            <div className="form-group">
                                <label>Email -</label>
                                <input type="email" name="email" value={input.email} onChange={handleChange} className="form-control">
                                </input>
                            </div>

                            {errors.email &&
                                <p className="text-danger">{errors.email}</p>
                            }

                            <div className="form-group">
                                <label>DOB -</label>
                                <input type="date" name="dob" value={input.dob} onChange={handleChange} className="form-control">
                                </input>
                            </div>
                            {errors.dob &&
                                <p className="text-danger">{errors.dob}</p>
                            }

                            <div className="form-group">
                                <label>Gender-</label>
                                <select name="gender" className="form-control" value={input.gender} onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>

                                </select>

                            </div>
                            {errors.gender &&
                                <p className="text-danger">{errors.gender}</p>
                            }

                            <div className="form-group">
                                <label>Address-</label>
                                <textarea type="text" name="address" value={input.address} onChange={handleChange} className="form-control">
                                </textarea>
                            </div>
                            {errors.address &&
                                <p className="text-danger">{errors.address}</p>
                            }
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}