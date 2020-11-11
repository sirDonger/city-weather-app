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
import { HeaderCell, DailyInfo } from '../types'
import { TABLE_HEADERS } from '../constants'

const WeatherTableHeader = ({ order, orderBy, onRequestSort }: HeaderProps) => {
  return (
    <TableHead>
      <TableRow>
        {TABLE_HEADERS.map((h: HeaderCell) => {
          return h.sort ? (
            <TableSortLabel
              active={orderBy === h.id}
              direction={orderBy === h.id ? order : 'asc'}
              onClick={() => onRequestSort(h.id)}
            >
              {h.label}
            </TableSortLabel>
          ) : h.label
        })}
      </TableRow>
    </TableHead>
  )
}

const WeatherTable = ({ cities, data }: TableProps) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof DailyInfo>('temp')
  const handleRequestSort = (property: keyof DailyInfo) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <WeatherTableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
      </Table>
    </TableContainer>
  )
}

export default WeatherTable