
import { h } from 'hyperapp'

import Bar from './bar'

const Foo = data =>
  h('div', null, [
    h('div', null, 'foo ' + data),
    Bar(data)
  ])

export default Foo
