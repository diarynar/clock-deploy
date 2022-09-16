/** @jsxImportSource @emotion/react */

import Button from './base/Button'
import Input from './base/Input'
import Table from './base/Table'
import { parseFullTime } from '../utils/utils'
import { useState } from 'react'

const tableHeader = [
  'Seconds Lamp',
  'Five Hour Row',
  'Single Hour Row',
  'Five Minute Row',
  'Single Minute Row',
  'Entire Berlin Clock',
]
function BerlinClockPage() {
  const [digitalTime, setDigitalTime] = useState('')
  const [berlinClock, setBerlinClock] = useState<string[] | []>([])

  const onChange = (e: string) => {
    setDigitalTime(e)
  }

  const onConvert = () => {
    const digitalToBerlinFormat = parseFullTime(digitalTime)
    setBerlinClock(digitalToBerlinFormat)
  }

  return (
    <div className="convert-form w-100 h-100 flex flex-column items-center gap-10">
      <h2>Digital to Berlin Clock</h2>
      <div className="flex  items-center items-end gap-10">
        <Input
          label="Enter digital time"
          onChange={onChange}
          placeholder="11:14:54"
          value={digitalTime}
        />
        <Button label="Convert to Berlin Clock" onClick={() => onConvert()} />
      </div>

      {berlinClock.length > 0 && (
        <Table datas={berlinClock} headers={tableHeader} />
      )}
    </div>
  )
}

export default BerlinClockPage
