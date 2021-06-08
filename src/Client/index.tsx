import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Start from './Components/Start'
import { LocalStoragePlus } from '@vyrekxd/localstorage-plus'
import './main.css'
import 'bulma/css/bulma.css'
import '../Typings/index'

window.localStorage.plus = new LocalStoragePlus(window.localStorage)

ReactDOM.render(<Start />, document.getElementById('root'))
