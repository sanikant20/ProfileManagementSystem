import React from 'react'
import EditProfileDetails from '../../components/Profiles/EditProfileDetails';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

function EditScreen() {
    return (
        <div>
            <main>
                <NavBar />
                <EditProfileDetails />
                <Footer />
            </main>
        </div>
    )
}

export default EditScreen;
