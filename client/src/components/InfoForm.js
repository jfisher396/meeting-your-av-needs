import React from 'react'

export default function InfoForm() {
    return (
      <div>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell medium-6">
              <form method="POST" action="send">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="phone" placeholder="Phone" />
                <input type="text" name="email" placeholder="Email" />
                <input
                  type="submit"
                  className="success button"
                  value="Confirm order"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
