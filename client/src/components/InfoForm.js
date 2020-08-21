import React, { useState } from 'react'

export default function InfoForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleClick = (e) => {
    e.preventDefault();

    if(e.target.id === "name") {
      setName(e.target.value)
    }else {
      setEmail(e.target.value)
    }
  }

      return (
      <div>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell medium-6">

              <form onSubmit="">
                <input type="text" name="name" placeholder="Name" value={name} onChange={handleClick}/>
                <input type="text" name="email" placeholder="Email" value={email} onChange={handleClick}/>
                <button
                  onClick=""
                  className="success button"
                  value="Confirm order">
                    Confirm Order
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
}
