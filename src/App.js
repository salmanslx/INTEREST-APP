import { TextField, Stack, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrincipleValid, setisPrincipleValid] = useState(true)
  const [isRate, isRateValid] = useState(true)
  const [isYear, isyearValid] = useState(true)

  const validateInput = (e) => {
    const { name, value } = (e.target)

    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name === "principle") {
        setPrinciple(value)
        setisPrincipleValid(true)
      } else if (name === "rate") {
        setRate(value)
        isRateValid(true)
      } else if (name === "year") {
        setYear(value)
        isyearValid(true)
      }

    }
    else {
      if (name === "principle") {
        setPrinciple(value)
        setisPrincipleValid(false)
      } else if (name === "rate") {
        setRate(value)
        isRateValid(false)
      } else if (name === "year") {
        setYear(value)
        isyearValid(false)
      }
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert("Please fill the form completely")
    } else {
      setInterest(principle * rate * year / 100)
    }
  }
  const handlereset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setisPrincipleValid(true)
    isRateValid(true)
    isyearValid(true)
  }
  // regular experssion for number :/^[0-9]+$/
  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center w-100 bg-dark' >
      <div style={{ width: '500px' }} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple interest Easily</p>
        <div style={{ height: '150px' }} className='interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light rounded shadoe'>
          <h1>₹ {' '} {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>

        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={(e) => validateInput(e)} />
          </div>
          {
            !isPrincipleValid &&
            <div className='mb-3 text-danger fw-bolder' >
              *Invalid user Input
            </div>


          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate Of Interest (p.a)%" variant="outlined" value={rate || ""} name='rate' onChange={(e) => validateInput(e)} />
          </div>
          {
            !isRate &&
            <div className='mb-3 text-danger fw-bolder' >
              *Invalid user Input
            </div>


          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time period(yr)" variant="outlined" value={year || ""} name='year' onChange={(e) => validateInput(e)} />
          </div>
          {
            !isYear &&
            <div className='mb-3 text-danger fw-bolder' >
              *Invalid user Input
            </div>


          }
          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{ height: '70px', width: '200px' }} variant="contained" disabled={isPrincipleValid && isRateValid && isyearValid ? false : true}>CALCULATE</Button>
            <Button onClick={handlereset} style={{ height: '70px', width: '200px' }} variant="outlined">RESET</Button>
          </Stack>
        </form>

      </div>
    </div>
  );
}

export default App;