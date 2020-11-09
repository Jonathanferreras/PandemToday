/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../Card/Card'
import styles from './Stats.module.css'

export default function Stats () {
  const [selectedLocale, setSelectedLocale] = useState(false)

  const filters = [
    { locale: Global },
    { locale: US },
    { locale: Europe },
    { locale: Asia }
  ]

  const renderFilters = filters.map((filter, id) => {
      return (
            <li key={id} onClick="">
                {filter.locale}
            </li>
            )
        })



  return (
    <div className="dropdown">
      <ul>
          {renderFilters}
      </ul>
    </div>

  )
}
