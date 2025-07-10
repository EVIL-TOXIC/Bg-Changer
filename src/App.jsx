import React from 'react'

const App = () => {
  const changeBackgroundColor = (color)=> {
    document.body.style.backgroundColor = color;
    document.body.style.transition = 'background-color 0.5s ease';
    if (color === 'linear-gradient(to right, red, yellow)') {
      document.body.style.backgroundImage = color;
      document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundImage = 'none';
    }
  }
  return (
    <>
      <div className='buttons'>
        <button className='button' onClick={() => changeBackgroundColor('blue')}>Blue</button>
        <button className='button' onClick={() => changeBackgroundColor('red')}>Red</button>
        <button className='button' onClick={() => changeBackgroundColor('green')}>Green</button>
        <button className='button' onClick={() => changeBackgroundColor('yellow')}>Yellow</button>
        <button className='button' onClick={() => changeBackgroundColor('pink')}>Pink</button>
        <button className='button' onClick={() => changeBackgroundColor('orange')}>Orange</button>
        <button className='button' onClick={() => changeBackgroundColor('purple')}>Purple</button>
        <button className='button' onClick={() => changeBackgroundColor('black')}>Black</button>
        <button className='button' onClick={() => changeBackgroundColor('white')}>White</button>
        <button className='button' onClick={() => changeBackgroundColor('gray')}>Gray</button>
        <button className='button' onClick={() => changeBackgroundColor('linear-gradient(to right, red, yellow)')}>Gradient</button>
        <button className='button' onClick={() => changeBackgroundColor('white')}>Reset</button>
      </div>
    </>
  )
}

export default App
