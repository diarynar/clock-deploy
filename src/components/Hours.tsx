/** @jsxImportSource @emotion/react */

import { Divider } from './Divider'

interface HoursProps {
  hours: string[]
}
const styles = {
  container: {
    position: 'relative',
  },
}
function Hours({ hours }: HoursProps) {
  const hourClass = (hour: string) =>
    hour === 'R' ? 'bg-orange' : 'bg-grey-dark'

  return (
    <div data-testid="hours" className="flex flex-column">
      {hours.map((hour, i) => (
        <div key={i}>
          <div
            className="flex flex-row justify-center items-center w-18-rem bg-grey br-rounded"
            css={styles.container as any}
          >
            {hour &&
              hour
                .split('')
                .map((h, idx) => (
                  <div
                    key={idx}
                    className={`h-2-rem border br-rounded ${hourClass(h)}`}
                    css={{ width: 'calc(100% / 4)' }}
                  />
                ))}
          </div>
          <Divider />
        </div>
      ))}
    </div>
  )
}

export default Hours
