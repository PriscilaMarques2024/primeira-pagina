import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
   <h1>Versionando minha aplicação WEB </h1>   
   <img src="https://w7.pngwing.com/pngs/1010/842/png-transparent-corinthians-hd-logo.png" >
  </div>
`

setupCounter(document.querySelector('#counter'))
