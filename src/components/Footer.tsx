import React from 'react'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-gray-300 text-center font-light py-4'>
      © Christina Schweipert {currentYear}
    </footer>
  )
}