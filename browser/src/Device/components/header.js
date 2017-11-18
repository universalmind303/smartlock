import React from 'react'




const Header = ({title}) => {

  // normalize the title
  // \b - word boundary
  // [a-z] alphabetic capture group
  // g  - all matches
  const normalizedTitle = title.replace(/\b[a-z]/g, x => x.toUpperCase()).replace(/-/g, ' ')
  
  return (
    <div>{normalizedTitle}</div>
  )
}


export default Header
