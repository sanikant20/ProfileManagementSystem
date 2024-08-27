import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container mt-4">
            <div className="text-center mb-4">
                <h1 className="display-4">Profile Management System</h1>
                <p className="lead">Manage your profiles with ease. Navigate to the desired section using the options below.</p>
            </div>

            <div className="row justify-content-center">

                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">View Profiles</h5>
                            <p className="card-text">Browse your existing profiles.</p>
                            <Link to="/all-profiles" className="btn btn-primary">View Profiles</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Add New Profile</h5>
                            <p className="card-text">Create and add a new profile to the system.</p>
                            <Link to="/add-profile" className="btn btn-primary">Add Profile</Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Manage Profiles</h5>
                            <p className="card-text">Browse and manage your existing profiles.</p>
                            <Link to="/manage-profiles" className="btn btn-primary">View Profiles</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
