import React, { useState, useEffect } from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import { Coordinates, Action } from '../../types'
import { CityInfo } from '../types'

interface ItemProps {
  info: CityInfo;
  activeCity: boolean;
  addCity(name: string): Action;
  removeCity(name: string): Action;
  fetchWeatherData({ lon, lat }: Coordinates): Action;
  removeWeatherData({ lon, lat }: Coordinates): Action;
}

const CityListItem = ({ info, activeCity, addCity, removeCity, fetchWeatherData, removeWeatherData }: ItemProps) => {
  const [active, setActive] = useState<boolean>(activeCity)
  useEffect(() => {
    if (activeCity) {
      fetchWeatherData(info.coord)
    }
  }, [])
  const handleChange = (): void => {
    setActive(!active)
    if (!active) {
      addCity(info.name)
      fetchWeatherData(info.coord)
    } else {
      removeCity(info.name)
      removeWeatherData(info.coord)
    }
  }
  return (
    <FormControlLabel 
      control={<Checkbox checked={active} onChange={handleChange} />}
      label={info.name}
    />
  )
}

export default CityListItem