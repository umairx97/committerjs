#!/usr/bin/env node
const dates = require('minimist')(process.argv)
const _ = require('lodash')
const { execSync } = require('child_process')

const year = dates.year || new Date().getFullYear()
const startDate = new Date(`${year}-${dates.from}`)
const endDate = new Date(`${year}-${dates.to}`)

const diffDays = getDateDiffInDays(startDate, endDate)
const commitDate = startDate

let commitCount = _.sample([1, 1, 2, 3, 5, 5, 6])

for (let i = 0; i < diffDays; i++) {
  for (let j = 0; j < commitCount; j++) {
    console.log(`Number of Commits: ${commitCount}. Date: ${commitDate.toDateString()}`)
    execSync(`git commit -m commit --allow-empty --date="${commitDate.toDateString()}"`)
    commitCount = _.sample([1, 1, 2, 3, 5, 5, 6])
  }
  commitDate.setDate(commitDate.getDate() + 1)
}

function getDateDiffInDays (date1, date2) {
  const diffTime = Math.abs(date1 - date2)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}
