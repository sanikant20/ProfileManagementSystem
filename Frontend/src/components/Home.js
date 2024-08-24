import React from 'react'
import FormTable from './ProfileDetailForm';
import ProfileDetailTable from './ProfileDetailTable';

const Home = () => {
    return (
        <section className="content-main">
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <FormTable />
                        <hr />
                        <ProfileDetailTable />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;