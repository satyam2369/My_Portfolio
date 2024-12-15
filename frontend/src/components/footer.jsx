import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className="footer-main">
      <h2 className="footer-title">Satyam Mishra</h2>
      <p className="footer-quote">Turning ideas into reality through clean and clever code.</p>
      <p className="footer-rights">&copy; {new Date().getFullYear()} Satyam Mishra. All rights reserved.</p>
    </div>
  )
}

export default footer
