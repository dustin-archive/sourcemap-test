
import { h } from 'hyperapp'

import Foo from './foo'

const App = d =>
  h('div', null, [
    Foo('bar'),
    Foo('bar')
  ])

export default App
