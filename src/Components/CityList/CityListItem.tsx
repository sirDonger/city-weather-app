import React, { useState } from 'react'
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
  const addHandler = (): void => {
    addCity(info.name)
    fetchWeatherData(info.coord)
  }
  const removeHandler = (): void => {
    removeCity(info.name)
    removeWeatherData(info.coord)
  }
  const changeHandler = (): void => {
    setActive(!active)
    !active ? addHandler() : removeHandler()
  }
  return (
    <FormControlLabel 
      control={<Checkbox checked={active} onChange={changeHandler} />}
      label={info.name}
    />
  )
}

export default CityListItem