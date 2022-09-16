/** @jsxImportSource @emotion/react */

import Hours from './Hours'
import Minutes from './Minutes'
import Seconds from './Seconds'

interface BerlinClockProps {
  times: string[]
}
const styles = {
  container: {
    width: 'auto',
  },
  items: {
    padding: '0 10px',
  },
}
function BerlinClock({ times }: BerlinClockProps) {
  const [firstRow, secondRow, thirdRow, fourthRow, lastRow] = times
  const seconds = firstRow
  const hours = [secondRow, thirdRow]
  const minutes = [fourthRow, lastRow]
  return (
    <div
      data-testid="berlin-clock"
      className="berlin-clock-container flex flex-column justify-center items-center"
      css={styles.container}
    >
      <div className="w-100 flex justify-center  bg-dark" css={styles.items}>
        <Seconds seconds={seconds} />
      </div>
      <div className="w-100 flex justify-center  bg-yellow" css={styles.items}>
        <Hours hours={hours} />
      </div>
      <div className="w-100 flex justify-center  bg-orange" css={styles.items}>
        <Minutes minutes={minutes} />
      </div>
    </div>
  )
}

export default BerlinClock
