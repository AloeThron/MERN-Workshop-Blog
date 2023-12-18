import React from 'react'

export default function Nav() {
  return (
    <nav>
        <ul className='nav nav-tabs d-flex justify-content-center'>
            <li className='nav-item pr-3 pt-3 pb-3'>
                <a href="/" className='nav-link'>Home</a>
            </li>
            <li className='nav-item pr-3 pt-3 pb-3'>
                <a href="/create" className='nav-link'>Write Article</a>
            </li>
            <li className='nav-item pr-3 pt-3 pb-3'>
                <a href="/login" className='nav-link'>Sign in</a>
            </li>
        </ul>
    </nav>
  )
}
