import React from "react"

const Navbar = () => {
  return (
    <nav>
      <div>
        {/* hamburger menu */}
        <input type="text" placeholder="Search your notes"/>
      </div>
      <div>
      <img
        id="avatar"
        src={``}
        alt="avatar"
      />
      </div>
    </nav>
  )
}

export default Navbar
