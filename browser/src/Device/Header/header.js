import React from 'react'
import { Link } from 'react-router-dom'


// returns a header with normalized title
function Header({title}) {

  // normalize the title
  // \b - word boundary
  // [a-z] alphabetic capture group
  // g  - all matches
  const normalizedTitle = title.replace(/\b[a-z]/g, x => x.toUpperCase()).replace(/-/g, ' ')

  return (
    <div className='header container-fluid row'>
      <div className='col-11 text-left h1'>{normalizedTitle}</div>
      <div className="col-1 text-right">
        <Link to='/about_us'>About</Link>
      </div>
    </div>
  )
}


export default Header
