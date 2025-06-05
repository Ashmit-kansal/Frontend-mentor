import { useState } from 'react'

import logo from './assets/images/logo.svg'
import dollar from './assets/images/icon-dollar.svg'
import person from './assets/images/icon-person.svg'


function App() {

  return (
    <>
      <main>
        {/* container */}
        <div>
          {/* logo */}
          <div>
            <img src={logo} alt='logo-splitter'/>
          </div>
          {/* calculator container */}
          <div>
            {/* calculator */}
            <div>
              <p>Bill</p>
              {/* Bill amount */}
              <div>
                <img src={dollar} alt='dollar'/>
                <input type='number' placeholder='0' />
              </div>
              <p>Select Tip %</p>
              {/* Tip percentage grid */}
              <div>
                <button >5%</button>
                <button >10%</button>
                <button >15%</button>
                <button >25%</button>
                <button >50%</button>
                <input type='number' placeholder='Custom' />
              </div>
              <p>Number of People</p>
              {/* Number of people input */}
              <div>
                <img src={person} alt='person'/>
                <input type='number' placeholder='0' />
              </div>
            </div>
            {/* results */}
            <div>
              {/* tip amount per person */}
              <div>
                <div>
                  <p>Tip Amount</p>
                  <p>/ person</p>
                </div>
                <div>
                  <img src={dollar} alt='dollar'/>
                  <p>0.00</p>
                </div>
              </div>
              {/* total amount per person */}
              <div>
                <div>
                  <p>Total</p>
                  <p>/ person</p>
                </div>
                <div>
                  <img src={dollar} alt='dollar'/>
                  <p>0.00</p>
                </div>
              </div>
              {/* reset button */}
              <button>RESET</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
