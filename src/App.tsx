import React from 'react';
import CityList from './Containers/CityListContainer'
import WeatherTable from './Containers/WeatherTableContainer'

const App = () => {
  return (
    <div className="container pt-5 d-flex">
      <CityList />
      <WeatherTable />
    </div>
  )
}

export default App