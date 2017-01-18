import React from 'react'
import ReactDOM from 'react-dom'


const App = () => (
  <h1>{{ cookiecutter.app_name }}</h1>
)


ReactDOM.render(<App/>, document.getElementById('app'))
