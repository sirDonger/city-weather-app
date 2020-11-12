import { HeaderCell } from './types'

export const WEEK_DAYS: string[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const TABLE_HEADERS: HeaderCell[] = [
  {label: 'City', id: 'city', numeric: false, sort: false},
  {label: 'Temperature', id: 'temp', numeric: true, sort: true},
  {label: 'Wind speed', id: 'windSpeed', numeric: true, sort: true},
  {label: 'Weather', id: 'weather', numeric: false, sort: false}
]