import React, { useState } from 'react'
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel
} from '@material-ui/core'
import { TableProps, Order, HeaderProps } from './types'
import { HeaderCell, DailyInfo, CityData } from '../types'
import { TABLE_HEADERS, WEEK_DAYS } from '../constants'

const WeatherTableHeader = ({ order, orderBy, onRequestSort }: HeaderProps) => {
  return (
    <TableHead>
      <TableRow>
        {TABLE_HEADERS.map((h: HeaderCell) => (
          <TableCell
            key={h.id}
            align={h.numeric ? 'right' : 'left'}
          >
            {h.sort ? (
              <TableSortLabel
                active={orderBy === h.id}
                direction={orderBy === h.id ? order : 'asc'}
                onClick={() => onRequestSort(h.id)}
              >
                {h.label}
              </TableSortLabel>
          ) : h.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const WeatherTable = ({ cities, data }: TableProps) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof DailyInfo | string>('')
  const handleRequestSort = (property: keyof DailyInfo) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <WeatherTableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
        <TableBody>
          {data.map((d: CityData, i: number) => (
            <>
              <TableRow>
                <TableCell>{cities[i]}</TableCell>
              </TableRow>
              {d.daily.map((d: DailyInfo, i: number) => (
                <TableRow>
                  <TableCell align="right">{WEEK_DAYS[i]}</TableCell>
                  <TableCell align="right">{d.temp}</TableCell>
                  <TableCell align="right">{d.windSpeed}</TableCell>
                  <TableCell align="right">{d.weather}</TableCell>
                </TableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table> 
    </TableContainer>
  )
}

export default WeatherTable