/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect  } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function test () {
  const [selectedLocale, setSelectedLocale] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)

  const filters = [
    { locale: 'Global' },
    { locale: 'US' },
    { locale: 'Europe' },
    { locale: 'Asia' }
  ]

  const handleMenu = () => setOpenMenu(!openMenu)

  const handleSelectedLocale = () => setSelectedLocale(id)

  const renderFilters = filters.map((filter, id) => {
    // console.log(filters[id])
    return (
      <li key={id} onClick={() => setSelectedLocale(id)}>
        {filter.locale}
      </li>
    )
  })


  return (
    <div className="dropdown">
      <div className="stats-filter" onClick={handleMenu}>
        <h4 className="global-txt">{filters[selectedLocale].locale}</h4>
        <div className="grey-arrow-down"></div>
      </div>
      <ul className={openMenu ? "dropdown-menu" : "dropdown-menu-closed"}>
        {renderFilters}
      </ul>
    </div>

  )
}
