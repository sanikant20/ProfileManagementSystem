import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProfileDetails = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const dataPerPage = 5;

    // Function to load data from localStorage
    const loadData = () => {
        const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        setData(profiles);
        setFilteredData(profiles);
    };

    // Load data when the component mounts
    useEffect(() => {
        loadData();

        // Add an event listener to detect changes in localStorage
        window.addEventListener('storage', loadData);

        // Cleanup event listener when the component unmounts
        return () => {
            window.removeEventListener('storage', loadData);
        };
    }, []);

    // Update filtered data based on search query
    useEffect(() => {
        if (searchQuery) {
            const lowercasedQuery = searchQuery.toLowerCase();
            const newFilteredData = data.filter(profile =>
                profile.name.toLowerCase().includes(lowercasedQuery) ||
                profile.email.toLowerCase().includes(lowercasedQuery) ||
                profile.phoneNumber.toLowerCase().includes(lowercasedQuery) ||
                profile.city.toLowerCase().includes(lowercasedQuery) ||
                profile.district.toLowerCase().includes(lowercasedQuery) ||
                profile.province.toLowerCase().includes(lowercasedQuery) ||
                profile.country.toLowerCase().includes(lowercasedQuery)
            );
            setFilteredData(newFilteredData);
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data]);

    // Logic to paginate
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle deletion of a profile
    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
        if (confirmDelete) {
            const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
            profiles.splice(index, 1); // Remove the profile from the array
            localStorage.setItem('profiles', JSON.stringify(profiles)); // Update localStorage
            loadData(); // Refresh the data in the state
        }
    };

    // Handle search query change
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="flex-container">
            <div className="mb-3 d-flex justify-content-center w-100">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="form-control"
                    style={{ maxWidth: '600px' }}
                />
            </div>
            <div className="table-responsive">
                {filteredData.length === 0 ? (
                    <p style={{ color: "red", textAlign: "center" }}>No data available</p>
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
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item, index) => (
                                <tr key={index}>
                                    <td>{`P${indexOfFirstData + index + 1}`}</td>
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
                                    <td className="text-end">
                                        <Link to={`/EditScreen/${indexOfFirstData + index}`}>
                                            <i className="fas fa-pen" style={{ marginRight: "10px" }}></i>
                                        </Link>
                                        <Link to="#" onClick={() => handleDelete(indexOfFirstData + index)}>
                                            <i className="fas fa-trash" style={{ color: "red" }}></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div className="d-flex justify-content-between mb-3 align-items-center w-100">
                {/* Button to navigate to ProfilesPage */}
                <div className="mt-2">
                    <Link to="/Profiles" className="btn btn-primary">View All Profiles</Link>
                </div>

                {/* Pagination */}
                {filteredData.length > 0 && (
                    <nav className="pagination-container" aria-label="page navigation">
                        <ul className="pagination mb-0">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <a href="#!" className="page-link" onClick={() => paginate(currentPage - 1)}>
                                    Previous
                                </a>
                            </li>
                            {Array.from({ length: Math.ceil(filteredData.length / dataPerPage) }).map((_, index) => (
                                <li className={`page-item ${currentPage === index + 1 ? "active" : ""}`} key={index}>
                                    <a href="#!" className="page-link" onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === Math.ceil(filteredData.length / dataPerPage) ? "disabled" : ""}`}>
                                <a href="#!" className="page-link" onClick={() => paginate(currentPage + 1)}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default ProfileDetails;
