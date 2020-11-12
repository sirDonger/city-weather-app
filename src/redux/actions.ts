import * as Actions from './constants'
import { Action, Coordinates } from '../types'

export const addCity = (payload: string): Action => ({
  type: Actions.ADD_CITY,
  payload
})

export const removeCity = (payload: string): Action => ({
  type: Actions.REMOVE_CITY,
  payload
})

export const fetchWeatherData = (payload: Coordinates): Action => ({
  type: Actions.FETCH_WEATHER_DATA,
  payload
})

export const removeWeatherData = (payload: Coordinates): Action => ({
  type: Actions.REMOVE_WEATHER_DATA,
  payload
})