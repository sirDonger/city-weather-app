import * as Actions from './constants'
import { Action, State } from '../types'
import { cityFilter } from './helpers'

const initState: State = {
  weatherData: [],
  error: null
}

const rootReducer = (state = initState, action: Action): State =>  {
  const { type, payload } = action
  switch (type) {
    case Actions.FETCH_WEATHER_DATA_SUCCESS:
      return {...state, weatherData: [...state.weatherData, payload]}
    case Actions.FETCH_WEATHER_DATA_FAILURE:
      return {...state, error: payload}
    case Actions.REMOVE_WEATHER_DATA:
      return {...state, weatherData: cityFilter(state.weatherData, payload)}
    default:
      return state
  }
}

export default rootReducer