import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditProfileDetails = () => {
    const { profileId } = useParams(); // Get the profile number from the URL
    const navigate = useNavigate();

    // State for form data, errors, and country list
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        dob: '',
        city: '',
        district: '',
        province: '',
        country: 'Nepal', // Default country
        profilePicture: ''
    });

    const [initialProfilePicture, setInitialProfilePicture] = useState('');
    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Fetch the list of countries
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();

        const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        const profile = profiles[profileId];
        if (profile) {
            setProfileData(profile);
            setInitialProfilePicture(profile.profilePicture); // Store the initial picture
        }
    }, [profileId]);

    const validateField = (id, value) => {
        const newErrors = { ...errors };

        switch (id) {
            case 'name':
                newErrors.name = value ? '' : 'Name is required';
                break;
            case 'email':
                newErrors.email = value ?
                    (/^\S+@\S+\.\S+$/.test(value) ? '' : 'Email is invalid') : 'Email is required';
                break;
            case 'phoneNumber':
                newErrors.phoneNumber = value ?
                    (/^\d{10}$/.test(value) ? '' : "Phone number must be 10 digits.") : 'Phone number is required';
                break;
            case 'dob':
                newErrors.dob = value ? '' : 'Date of birth is required';
                break;
            case 'city':
                newErrors.city = value ? '' : 'City is required';
                break;
            case 'district':
                newErrors.district = value ? '' : 'District is required';
                break;
            case 'province':
                newErrors.province = value ? '' : 'Province is required';
                break;
            case 'country':
                newErrors.country = value ? '' : 'Country is required';
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const { id, value, files } = e.target;

        if (id === 'profilePicture') {
            const file = files[0];
            if (file && file.type === 'image/png') { // Only accept PNG files
                setProfileData((prevData) => ({
                    ...prevData,
                    [id]: file,
                }));
                setErrors(prevErrors => ({
                    ...prevErrors,
                    profilePicture: '' // Clear the error if file is valid
                }));
            } else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    profilePicture: 'Please upload a .png file'
                }));
                e.target.value = ''; // Clear the file input
            }
        } else {
            setProfileData((prevData) => ({
                ...prevData,
                [id]: value,
            }));
            validateField(id, value); // Validate field as it changes
        }
    };

    const validateForm = () => {
        const newErrors = {};
        validateField('name', profileData.name);
        validateField('email', profileData.email);
        validateField('phoneNumber', profileData.phoneNumber);
        validateField('dob', profileData.dob);
        validateField('city', profileData.city);
        validateField('district', profileData.district);
        validateField('province', profileData.province);
        validateField('country', profileData.country);

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleUpdate = () => {
        if (!validateForm()) return; // Stop if validation fails

        const profiles = JSON.parse(localStorage.getItem('profiles')) || [];

        if (profileData.profilePicture !== initialProfilePicture) {
            const reader = new FileReader();
            reader.onloadend = () => {
                profiles[profileId] = { ...profileData, profilePicture: reader.result }; // Update profile picture with base64
                localStorage.setItem('profiles', JSON.stringify(profiles));
                alert('Profile successfully updated!');
                navigate('/');
            };
            if (profileData.profilePicture instanceof File) {
                reader.readAsDataURL(profileData.profilePicture); // Convert file to base64
            } else {
                profiles[profileId] = profileData; // If no change in profile picture
                localStorage.setItem('profiles', JSON.stringify(profiles));
                alert('Profile successfully updated!');
                navigate('/');
            }
        } else {
            profiles[profileId] = profileData; // If no change in profile picture
            localStorage.setItem('profiles', JSON.stringify(profiles));
            alert('Profile successfully updated!');
            navigate('/');
        }
    };

    return (
        <div>
            <section className="content-main">
                <form>
                    <div className="d-flex justify-content-center">
                        <div className="col-xl-8 col-lg-8 mt-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="content-header d-flex justify-content-center mb-3">
                                        <h2 className="content-title">Edit Profile Details</h2>
                                    </div>
                                    {Object.keys(errors).length > 0 && (
                                        <div className="alert alert-danger" role="alert">
                                            {Object.values(errors).map((error, index) => (
                                                <div key={index}>{error}</div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                value={profileData.name}
                                                onChange={handleChange}
                                                className="form-control"
                                                id="name"
                                            />
                                            {errors.name && <div className="text-danger">{errors.name}</div>}
                                        </div>
                                    </div>
                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="email"
                                                value={profileData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                                id="email"
                                            />
                                            {errors.email && <div className="text-danger">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">Phone Number</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                value={profileData.phoneNumber}
                                                onChange={handleChange}
                                                className="form-control"
                                                id="phoneNumber"
                                            />
                                            {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                                        </div>
                                    </div>
                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="dob" className="col-sm-4 col-form-label">Date of Birth</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="date"
                                                value={profileData.dob}
                                                onChange={handleChange}
                                                className="form-control"
                                                id="dob"
                                            />
                                            {errors.dob && <div className="text-danger">{errors.dob}</div>}
                                        </div>
                                    </div>
                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="profilePicture" className="col-sm-4 col-form-label">Profile Picture</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="file"
                                                accept=".png"
                                                onChange={handleChange}
                                                className="form-control"
                                                id="profilePicture"
                                            />
                                            {errors.profilePicture && <div className="text-danger">{errors.profilePicture}</div>}
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="city" className="form-label">City</label>
                                                <input
                                                    type="text"
                                                    value={profileData.city}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    id="city"
                                                />
                                                {errors.city && <div className="text-danger">{errors.city}</div>}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="district" className="form-label">District</label>
                                                <input
                                                    type="text"
                                                    value={profileData.district}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    id="district"
                                                />
                                                {errors.district && <div className="text-danger">{errors.district}</div>}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="province" className="form-label">Province</label>
                                                <input
                                                    type="text"
                                                    value={profileData.province}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    id="province"
                                                />
                                                {errors.province && <div className="text-danger">{errors.province}</div>}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="country" className="form-label">Country</label>
                                                <select
                                                    id="country"
                                                    className="form-control"
                                                    value={profileData.country}
                                                    onChange={handleChange}
                                                >
                                                    {countries.map((country) => (
                                                        <option key={country.cca3} value={country.name.common}>
                                                            {country.name.common}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.country && <div className="text-danger">{errors.country}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3 d-flex justify-content-between">
                                        <Link to="/" className="btn btn-info text-white">Back</Link>
                                        <button
                                            type="button"
                                            onClick={handleUpdate}
                                            className="btn btn-primary"
                                        >
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
    );
};

export default EditProfileDetails;
