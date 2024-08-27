import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container mt-4">
            {/* Hero Section */}
            <div className="row justify-content-center align-items-center mb-5">
                <div className="col-md-8 text-center">
                    <div className="card shadow-lg p-5">
                        <h1 className="display-6 mb-4">
                            Welcome to Your Profile Management System
                        </h1>
                        <p className="lead mb-4">
                            Manage your profiles efficiently and securely. Track, update, and maintain your personal or organizational profiles all in one place.
                        </p>
                        <div className="mb-4">
                            <img
                                src="sani.jpg"
                                alt="Profile Management Illustration"
                                className="img-fluid rounded-circle"
                                style={{ maxWidth: '150px' }}
                            />
                        </div>
                        <Link to="/add-profiles" className="btn btn-primary btn-lg mb-4">
                            Add Profile
                        </Link>

                        {/* Cards Section */}
                        <div className="row justify-content-center">
                            {/* View Profiles Card */}
                            <div className="col-md-6 mb-3">
                                <div className="card shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">View Profiles</h5>
                                        <p className="card-text">Browse your existing profiles.</p>
                                        <Link to="/all-profiles" className="btn btn-primary">View Profiles</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Manage Profiles Card */}
                            <div className="col-md-6 mb-3">
                                <div className="card shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Manage Profiles</h5>
                                        <p className="card-text">Browse and manage your existing profiles.</p>
                                        <Link to="/manage-profiles" className="btn btn-primary">Manage Profiles</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;
