import React, { useRef, useEffect } from 'react'
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
  const active = useRef<boolean>(activeCity)
  const handleChange = () => active.current = !active.current
  return (
    <FormControlLabel 
      control={<Checkbox checked={active.current} onChange={handleChange} />}
      label={info.name}
    />
  )
}

export default CityListItem