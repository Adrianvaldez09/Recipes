import React from 'react'
import Search from './Search'

function SearchSection() {
  return (
      <div className='search-section'>
            <div className='search-section-container'>
                <h2>Don't know what to cook?</h2>
                <h3>Follow over 5000 recipes.</h3>
                <Search/>
            </div>
      </div>
  )
}

export default SearchSection