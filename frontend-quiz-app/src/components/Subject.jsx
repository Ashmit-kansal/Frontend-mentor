
function Subject() {
  return (
    <div>
          {/* this div is for welcoming the participant */}
          <div>
            <h1>Welcome to the</h1>
            <h1>Frontend Quiz!</h1>
            <p>Pick a subject to get started</p>
          </div>
          {/* this div will show the list of subjects */}
          <div>
            <div>
              <img />
              <button>HTML</button>
            </div>
            <div>
              <img />
              <button>CSS</button>
            </div>
            <div>
              <img />
              <button>JavaScript</button>
            </div>
            <div>
              <img />
              <button>Accessibility</button>
            </div>
          </div>
        </div>
  )
}

export default Subject