import Link from 'next/link'
import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Headlines(){
  return(
    <div className="headlines">
      <h1>
        Headlines
      </h1>

      <div className="main-card">
        <img className="headline-pic" src="/cv19.png" />
        <div className="headline-card">
          <div className="headline-tag"> Coronavirus </div>
          <div className="headline-news">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula lobortis enim, vitae lacinia lacus fringilla non.
          </div>
          <div className="social-stats">

          </div>
        </div>
      </div>
    </div>
  )
}
