import { parseFullTime, startClock } from '../utils/utils'
import { useEffect, useState } from 'react'

import BerlinClock from './BerlinClock'
import DigitalClock from './DigitalClock'

function CurrentClockDisplay() {
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      setTime(startClock(new Date()))
    }, 1000)
  })

  const digitalToBerlinFormat = parseFullTime(time)

  return (
    <div className="w-100 h-100 flex flex-column items-center">
      <h2>Berlin Clock (Current Time)</h2>
      <div className="flex flex-column items-center">
        <BerlinClock times={digitalToBerlinFormat} />
        <DigitalClock times={time} />
      </div>
    </div>
  )
}

export default CurrentClockDisplay
