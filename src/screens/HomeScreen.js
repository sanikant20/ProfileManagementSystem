import React from 'react'
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function home() {
    return (
        <div>
            <main>
                <NavBar />
                <HomePage />
                <Footer />
            </main>
        </div>
    )
}

export default home;
