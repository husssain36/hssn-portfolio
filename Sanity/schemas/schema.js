
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import pageInfo from './pageInfo'
import experience from './experience'
import project from './project'
import skill from './skill'
import social from './social'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    experience,
    project,
    skill,
    social,
    blockContent,
    category,
    post,
    author

  ]),
})
