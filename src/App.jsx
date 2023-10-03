import { useState } from 'react'

const messages = ['Leran React', 'Apply for new jobs', 'Earn new income']

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function previous() {
    if (step > 1) setStep(step - 1)
  }
  function next() {
    if (step < 3) setStep(step + 1)
  }
  return (
    <div>
      <div className='close'>
        <span
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          X
        </span>
      </div>
      {isOpen && (
        <div className='container'>
          <div className='numbers'>
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button onClick={() => previous()}>prev</button>
            <button onClick={() => next()}>next</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
