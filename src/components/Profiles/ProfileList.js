import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfileList = () => {
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
        <div className="container mt-4 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <div className="content-header d-flex justify-content-center mb-3">
                            <h2 className="content-title">Profile Lists</h2>
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
                        {filteredProfiles.length === 0 ? (
                            <p style={{ color: 'red', textAlign: 'center' }}>No profiles available</p>
                        ) : (
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Profile</th>
                                        <th scope="col">Profile Picture</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">Address</th>
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
                                            <td className="text-nowrap">{item.name}</td> {/* Prevent wrapping */}
                                            <td className="text-nowrap">{item.email}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.dob}</td>
                                            <td>{`${item.city}, ${item.district}, ${item.province}, ${item.country}`}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        <div className="mb-3 d-flex justify-content-between">
                            <Link to="/" className="btn btn-info text-white">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfileList;
