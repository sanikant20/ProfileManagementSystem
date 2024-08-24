import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const ProfileDetails = () => {
    const data = [
        { profile: "P1", name: "John Doe", email: "john.doe@example.com", phoneNumber: "123-456-7890", dob: "1990-01-01", address: "123 Elm Street" },
        { profile: "P2", name: "Jane Smith", email: "jane.smith@example.com", phoneNumber: "234-567-8901", dob: "1985-02-02", address: "456 Oak Avenue" },
        { profile: "P3", name: "Alice Johnson", email: "alice.johnson@example.com", phoneNumber: "345-678-9012", dob: "1992-03-03", address: "789 Pine Road" },
        { profile: "P4", name: "Bob Brown", email: "bob.brown@example.com", phoneNumber: "456-789-0123", dob: "1988-04-04", address: "101 Maple Lane" },
        { profile: "P5", name: "Charlie Davis", email: "charlie.davis@example.com", phoneNumber: "567-890-1234", dob: "1995-05-05", address: "202 Birch Street" },
        { profile: "P6", name: "Dana White", email: "dana.white@example.com", phoneNumber: "678-901-2345", dob: "2000-06-06", address: "303 Cedar Drive" },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const dataPerPage = 5;

    // Logic to paginate
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="flex-container">
            <>
                <Search />
            </>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Profile</th>
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
                                <td>{item.profile}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.dob}</td>
                                <td>{item.address}</td>
                                <td className="text-end">
                                    <Link to="/EditScreen">
                                        <i className="fas fa-pen" style={{ marginRight: "10px" }}></i>
                                    </Link>

                                    <Link to="#">
                                        <i className="fas fa-trash" style={{ color: "red" }}></i>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <nav className="pagination-container" aria-label="page navigation">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <a  href="#!" className="page-link" onClick={() => paginate(currentPage - 1)}>
                            Previous
                        </a>
                    </li>
                    {Array.from({ length: Math.ceil(data.length / dataPerPage) }).map((_, index) => (
                        <li className={`page-item ${currentPage === index + 1 ? "active" : ""}`} key={index}>
                            <a  href="#!" className="page-link" onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === Math.ceil(data.length / dataPerPage) ? "disabled" : ""}`}>
                        <a  href="#!" className="page-link" onClick={() => paginate(currentPage + 1)}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ProfileDetails;
