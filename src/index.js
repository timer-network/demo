import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/common.css';

ReactDOM.render(<App />, document.getElementById('root'))

baseFontSize()
window.addEventListener('resize', baseFontSize)

function baseFontSize (){
  const base = 37.5 / 375

  const shouldBeWide = base

  document.documentElement.style.fontSize = shouldBeWide + 'px'
}
