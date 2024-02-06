import React from 'react'
import style from "./style.module.css"

const App = () => {
  return (
      <section class="buttons">
    <h1>Button Hover Effects</h1>
  <div class={style.container}>
    
    <a href="https://twitter.com/Dave_Conner" class="btn btn-1">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
     Hover
    </a>
    <a href="https://twitter.com/Dave_Conner" class="btn btn-2">Hover</a>     
    <a href="https://twitter.com/Dave_Conner" class="btn btn-3">Hover</a>     
    <a href="https://twitter.com/Dave_Conner" class="btn btn-4"><span>Hover</span></a> 
    <a href="https://twitter.com/Dave_Conner" class="btn btn-5">Hover</a>
  </div>
  <p>Follow on <a href="https://twitter.com/Dave_Conner" target="_blank">Twitter</a></p>
</section>
  )
}

export default App
