/** @jsxImportSource @emotion/react */

import Button from './base/Button'
import Input from './base/Input'
import Table from './base/Table'
import { parseBerlinToDigital } from '../utils/utils'
import { useState } from 'react'

function BerlinClockPage() {
  const [digitalTime, setDigitalTime] = useState('')
  const [berlinClock, setberlinClock] = useState<string>('')

  const onChange = (e: string) => {
    setberlinClock(e)
  }

  const onConvert = () => {
    const digitalToBerlinFormat = parseBerlinToDigital(berlinClock)
    setDigitalTime(digitalToBerlinFormat)
  }

  return (
    <div className="convert-form w-100 h-100 flex flex-column items-center gap-10">
      <h2>Berlin Clock to Digital </h2>
      <div className="flex  items-center items-end gap-10">
        <Input
          label="Enter berlin clock"
          onChange={onChange}
          placeholder="ORRRRRRROYYRYYRYYRYYYYYY"
          value={berlinClock}
        />
        <Button label="Convert to Digital Clock" onClick={() => onConvert()} />
      </div>
      {digitalTime && (
        <Table
          datas={[
            digitalTime === 'invalid'
              ? 'Invalid Enter Berlin Clock !'
              : `${digitalTime} (numbers of seconds are not precise)`,
          ]}
          headers={['Digital clock']}
        />
      )}
    </div>
  )
}

export default BerlinClockPage
