import React from 'react'

function Welcome() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "Morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
  } else {
    timeOfDay = "Evening"
  }

  return (
  <h2>Good {timeOfDay}!</h2>
  )
}

export default Welcome