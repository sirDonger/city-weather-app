import React, { useEffect } from 'react'
import data from '../../data/data.json'
import { ListProps, CityInfo } from '../types'

import { FormControl, FormGroup, FormLabel } from '@material-ui/core'

import CityListItem from './CityListItem'

const CityList = ({ cities, addCity, removeCity, fetchWeatherData, removeWeatherData }: ListProps) => {
  useEffect(() => {
    for (let city of data) {
      cities.includes(city.name) && fetchWeatherData(city.coord)
    }
  }, [])
  return (
    <FormControl component='fieldset' className="mr-5">
      <FormLabel component='legend'>Netherlands cities</FormLabel>
      <FormGroup>
        {data.map((c: CityInfo) => (
          <CityListItem
            key={c.id}
            info={c}
            addCity={addCity}
            removeCity={removeCity}
            fetchWeatherData={fetchWeatherData}
            removeWeatherData={removeWeatherData}
            activeCity={cities.includes(c.name)}
          />
        ))}
      </FormGroup>
    </FormControl>
  )
}

export default CityList
