import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import restaurant from './restaurant'
import featured from './featured'
import category from './category'
import dish from './dish'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    restaurant,
    category,
    dish,
    featured
  ]),
})
