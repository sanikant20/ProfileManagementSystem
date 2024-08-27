import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import AllProfieTable from '../../components/Profiles/ManageProfileTable'

function ManageProfileScreen() {
  return (
    <div>
      <NavBar />
      <AllProfieTable />
      <Footer />
    </div>
  )
}

export default ManageProfileScreen