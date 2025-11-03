import React from 'react'
import Hero from '../components/hero'

import HomeCards from '../components/HomeCards'
import JobListings from '../components/joblistings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
    </div>
  )
}

export default HomePage
