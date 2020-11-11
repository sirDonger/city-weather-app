import * as Actions from './constants'
import { Action, State } from '../types'
import { cityNameFilter, cityDataFilter } from './helpers'

const initState: State = {
  weatherData: [],
  cities: ['Amsterdam'],
  error: null
}

const rootReducer = (state = initState, action: Action): State =>  {
  const { type, payload } = action
  switch (type) {
    case Actions.ADD_CITY:
      return {...state, cities: [...state.cities, payload]}
    case Actions.REMOVE_CITY:
      return {...state, cities: cityNameFilter(state.cities, payload)}
    case Actions.FETCH_WEATHER_DATA_SUCCESS:
      return {...state, weatherData: [...state.weatherData, payload]}
    case Actions.FETCH_WEATHER_DATA_FAILURE:
      return {...state, error: payload}
    case Actions.REMOVE_WEATHER_DATA:
      return {...state, weatherData: cityDataFilter(state.weatherData, payload)}
    default:
      return state
  }
}

export default rootReducer