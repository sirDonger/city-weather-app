import { connect } from 'react-redux'
import { addCity, removeCity, fetchWeatherData, removeWeatherData } from '../redux/actions'
import { State } from '../types'

import CityList from '../Components/CityList/CityList'

const mapStateToProps = (state: State) => ({
  cities: state.cities
})

const mapDispatchToProps = {
  addCity,
  removeCity,
  fetchWeatherData,
  removeWeatherData
}

const connector = connect(mapStateToProps, mapDispatchToProps) as any

export default connector(CityList) as any