import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfilesPage = () => {
    const [profiles, setProfiles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProfiles, setFilteredProfiles] = useState([]);

    // Load profiles from localStorage
    useEffect(() => {
        const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
        setProfiles(storedProfiles);
        setFilteredProfiles(storedProfiles);
    }, []);

    // Filter profiles based on search query
    useEffect(() => {
        if (searchQuery) {
            const lowercasedQuery = searchQuery.toLowerCase();
            const filtered = profiles.filter(profile =>
                profile.name.toLowerCase().includes(lowercasedQuery) ||
                profile.email.toLowerCase().includes(lowercasedQuery) ||
                profile.phoneNumber.toLowerCase().includes(lowercasedQuery) ||
                profile.city.toLowerCase().includes(lowercasedQuery) ||
                profile.district.toLowerCase().includes(lowercasedQuery) ||
                profile.province.toLowerCase().includes(lowercasedQuery) ||
                profile.country.toLowerCase().includes(lowercasedQuery)
            );
            setFilteredProfiles(filtered);
        } else {
            setFilteredProfiles(profiles);
        }
    }, [searchQuery, profiles]);

    return (
        <div className="d-flex justify-content-center">
            <section className="content-main w-100">
                <div className="content-header d-flex justify-content-center mb-3">
                    <h2 className="content-title">Profiles</h2>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <input
                        type="text"
                        placeholder="Search profiles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="form-control"
                        style={{ maxWidth: '600px' }}
                    />
                </div>
                <div className="table-responsive">
                    {filteredProfiles.length === 0 ? (
                        <p style={{ color: 'red', textAlign: 'center' }}>No profiles available</p>
                    ) : (
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Profile</th>
                                    <th>Profile Picture</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>DOB</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProfiles.map((item, index) => (
                                    <tr key={index}>
                                        <td>{`P${index + 1}`}</td>
                                        <td>
                                            <img
                                                src={item.profilePicture}
                                                alt={`${item.name}'s profile`}
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.dob}</td>
                                        <td>{`${item.city}, ${item.district}, ${item.province}, ${item.country}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <Link to="/" className="btn btn-danger text-white">Back</Link>
                </div>
            </section>
        </div>
    );
};

export default ProfilesPage;
