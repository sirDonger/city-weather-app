import { connect } from 'react-redux'
import { State } from '../types'

import WeatherTable from '../Components/WeatherTable'

const mapStateToProps = (state: State) => ({
  cities: state.cities,
  data: state.weatherData
})

const connector = connect(mapStateToProps) as any

export default connector(WeatherTable) as any