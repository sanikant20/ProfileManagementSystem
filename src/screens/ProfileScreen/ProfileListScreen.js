import React from 'react'
import ProfileList from '../../components/Profiles/ProfileList';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

function ProfileListScreen() {
    return (
        <div>
            <main>
                <NavBar />
                <ProfileList />
                <Footer />
            </main>
        </div>
    )
}

export default ProfileListScreen;
