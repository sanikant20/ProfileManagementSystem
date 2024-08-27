import React, { useState, useEffect } from 'react';

const provinces = [
    'Koshi Province',
    'Madhesh Province',
    'Bagmati Province',
    'Gandaki Province',
    'Lumbini Province',
    'Karnali Province',
    'Sudurpashchim Province'
];

const AddProfile = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        dob: '',
        city: '',
        district: '',
        province: provinces[0], // Default to first province
        country: 'Nepal', // Default country
        profilePicture: ''
    });

    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]); // State for the list of countries

    // Fetch the list of countries on component mount
    useEffect(() => {
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
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [id]: value
        }));
        validateField(id, value); // Validate the field as it changes
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type !== "image/png") {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    profilePicture: "Only PNG files are allowed."
                }));
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile(prevState => ({
                    ...prevState,
                    profilePicture: reader.result // Base64 encoded string
                }));
                setErrors(prevErrors => ({
                    ...prevErrors,
                    profilePicture: ''
                }));
            };
            reader.readAsDataURL(file); // Converts to base64
        }
    };

    const validateField = (fieldId, value) => {
        const newErrors = { ...errors };

        switch (fieldId) {
            case 'name':
                newErrors.name = value ? '' : 'Name is required.';
                break;
            case 'email':
                newErrors.email = value ?
                    (/^\S+@\S+\.\S+$/.test(value) ? '' : 'Email is invalid.') : 'Email is required.';
                break;
            case 'phoneNumber':
                newErrors.phoneNumber = value ?
                    (/^\d{10}$/.test(value) ? '' : 'Phone number must be 10 digits.') : 'Phone number is required.';
                break;
            case 'dob':
                newErrors.dob = value ? '' : 'Date of birth is required.';
                break;
            case 'city':
                newErrors.city = value ? '' : 'City is required.';
                break;
            case 'district':
                newErrors.district = value ? '' : 'District is required.';
                break;
            case 'province':
                newErrors.province = value ? '' : 'Province is required.';
                break;
            case 'country':
                newErrors.country = value ? '' : 'Country is required.';
                break;
            case 'profilePicture':
                newErrors.profilePicture = value ? '' : 'Profile picture is required.';
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleSubmit = () => {
        // Validate all fields before submitting
        const allErrors = {
            name: profile.name ? '' : 'Name is required.',
            email: profile.email ?
                (/^\S+@\S+\.\S+$/.test(profile.email) ? '' : 'Email is invalid.') : 'Email is required.',
            phoneNumber: profile.phoneNumber ?
                (/^\d{10}$/.test(profile.phoneNumber) ? '' : 'Phone number must be 10 digits.') : 'Phone number is required.',
            dob: profile.dob ? '' : 'Date of birth is required.',
            city: profile.city ? '' : 'City is required.',
            district: profile.district ? '' : 'District is required.',
            province: profile.province ? '' : 'Province is required.',
            country: profile.country ? '' : 'Country is required.',
            profilePicture: profile.profilePicture ? '' : 'Profile picture is required.'
        };

        setErrors(allErrors);

        if (Object.values(allErrors).every(error => error === '')) {
            // Retrieve existing profiles from localStorage
            const profiles = JSON.parse(localStorage.getItem('profiles')) || [];

            // Add new profile to the list
            profiles.push(profile);

            // Store the updated profiles array back in localStorage
            localStorage.setItem('profiles', JSON.stringify(profiles));

            // Clear the form
            setProfile({
                name: '',
                email: '',
                phoneNumber: '',
                dob: '',
                city: '',
                district: '',
                province: provinces[0], // Reset to default province
                country: 'Nepal', // Reset to default country
                profilePicture: ''
            });

            setErrors({});
            alert('Profile added successfully!');
            // Refresh the page to reflect changes
            window.location.reload();
        }
    };

    return (
        <section className="content-main">
            <form>
                <div className="d-flex justify-content-center">
                    <div className="col-xl-8 col-lg-8 mt-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body ">

                                <div className="content-header d-flex justify-content-center mb-3">
                                    <h2 className="content-title">Enter Profile Details</h2>
                                </div>

                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="form-control"
                                            id="name"
                                            value={profile.name}
                                            onChange={handleChange}
                                            style={{ textAlign: 'left' }}
                                        />
                                        {errors.name && <div className="text-danger">{errors.name}</div>}
                                    </div>
                                </div>

                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="email"
                                            placeholder="text@email.com"
                                            className="form-control"
                                            id="email"
                                            value={profile.email}
                                            onChange={handleChange}
                                            style={{ textAlign: 'left' }}
                                        />
                                        {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>
                                </div>

                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">Phone Number</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            placeholder="9823214121"
                                            className="form-control"
                                            id="phoneNumber"
                                            value={profile.phoneNumber}
                                            onChange={handleChange}
                                            style={{ textAlign: 'left' }}
                                        />
                                        {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                                    </div>
                                </div>

                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="dob" className="col-sm-4 col-form-label">Date of Birth</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="dob"
                                            value={profile.dob}
                                            onChange={handleChange}
                                            style={{ textAlign: 'left' }}
                                        />
                                        {errors.dob && <div className="text-danger">{errors.dob}</div>}
                                    </div>
                                </div>

                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="profilePicture" className="col-sm-4 col-form-label">Profile Picture</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="file"
                                            accept="image/png" // Ensuring only PNG files are accepted
                                            className="form-control"
                                            id="profilePicture"
                                            onChange={handleImageChange}
                                            style={{ textAlign: 'left' }}
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
                                                placeholder="Type here"
                                                className="form-control"
                                                id="city"
                                                value={profile.city}
                                                onChange={handleChange}
                                            />
                                            {errors.city && <div className="text-danger">{errors.city}</div>}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="district" className="form-label">District</label>
                                            <input
                                                type="text"
                                                placeholder="Type here"
                                                className="form-control"
                                                id="district"
                                                value={profile.district}
                                                onChange={handleChange}
                                            />
                                            {errors.district && <div className="text-danger">{errors.district}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="province" className="form-label">Province</label>
                                            <select
                                                id="province"
                                                className="form-control"
                                                value={profile.province}
                                                onChange={handleChange}
                                            >
                                                {provinces.map((province, index) => (
                                                    <option key={index} value={province}>
                                                        {province}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.province && <div className="text-danger">{errors.province}</div>}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <select
                                                id="country"
                                                className="form-control"
                                                value={profile.country}
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

                                <div className="mb-2 text-center">
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                        Add Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddProfile;
