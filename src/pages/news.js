/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar/Navbar'


export default function News (props) {
    return(
        <div>
            <Navbar />
            <h3>news</h3>
        </div>
    )
}