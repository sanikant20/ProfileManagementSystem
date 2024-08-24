import React from 'react'
import { Link } from 'react-router-dom'

const EditProfileDetails = () => {
    return (
        <div>
            <section className="content-main">
                <form>
                    <div className="content-header d-flex justify-content-center mb-3">
                        <h2 className="content-title">Edit Profile Details</h2>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card shadow-sm">
                                <div className="card-body">

                                    <div className="mb-3 row align-items-center">

                                        <label htmlFor="Name" className="col-sm-4 col-form-label">
                                            Name
                                        </label>

                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="form-control"
                                                id="Name"
                                                style={{ textAlign: 'left' }}
                                            />
                                        </div>

                                    </div>

                                    <div className="mb-3 row align-items-center">

                                        <label htmlFor="email" className="col-sm-4 col-form-label">
                                            Email
                                        </label>

                                        <div className="col-sm-8">
                                            <input
                                                type="email"
                                                placeholder="text@email.com"
                                                className="form-control"
                                                id="email"
                                                style={{ textAlign: 'left' }}
                                            />
                                        </div>

                                    </div>

                                    <div className="mb-3 row align-items-center">

                                        <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">
                                            Phone Number
                                        </label>

                                        <div className="col-sm-8">
                                            <input
                                                type="Number"
                                                placeholder="9823214121"
                                                className="form-control"
                                                id="phoneNumber"
                                                style={{ textAlign: 'left' }}
                                            />
                                        </div>

                                    </div>

                                    <div className="mb-3 row align-items-center">

                                        <label htmlFor="dob" className="col-sm-4 col-form-label">
                                            Date of Birth
                                        </label>

                                        <div className="col-sm-8">
                                            <input
                                                type="date"
                                                placeholder="02-02-2001"
                                                className="form-control"
                                                id="dob"
                                                style={{ textAlign: 'left' }}
                                            />
                                        </div>

                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="city" className="form-label">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    id="city"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="district" className="form-label">
                                                    District
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    id="district"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="province" className="form-label">
                                                    Province
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    id="province"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="country" className="form-label">
                                                    Country
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    id="country"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3 row align-items-center">

                                        <label htmlFor="profilePicture" className="col-sm-4 col-form-label">
                                            Profile Picture
                                        </label>

                                        <div className="col-sm-8">
                                            <input
                                                type="file"
                                                placeholder="Select profile picture"
                                                className="form-control"
                                                id="profilePicture"
                                                style={{ textAlign: 'left' }}
                                            />
                                        </div>

                                    </div>

                                    <div className="mb-3 d-flex justify-content-between">
                                        <Link to="/" className="btn btn-danger text-white">
                                            Back
                                        </Link>
                                        <button type="button" className="btn btn-primary">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default EditProfileDetails;