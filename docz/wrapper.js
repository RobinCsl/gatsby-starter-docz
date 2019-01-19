import * as React from 'react'

// Gatsby's Link overrides:
// Gatsby internal mocking to prevent unnecessary error in docz: __PATH_PREFIX__ is not defined
global.__PATH_PREFIX__ = ''

export default ({ children }) => children
