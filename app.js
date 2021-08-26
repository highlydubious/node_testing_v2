const _ = require('lodash')

print = console.log

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

print(newItems)

