/** @jsxImportSource @emotion/react */

import { Divider } from './Divider'

interface MinutesProps {
  minutes: any[]
}
function Minutes({ minutes }: MinutesProps) {
  const minuteClass = (m: string) =>
    m === 'R' ? 'bg-red' : m === 'Y' ? 'bg-yellow' : 'bg-grey-dark'

  return (
    <div data-testid="minutes" className="flex flex-column">
      {minutes.map((minute, i) => (
        <div key={i}>
          <div className="flex flex-row w-18-rem br-rounded bg-grey">
            {minute &&
              minute.split('').map((m: any, index: number) => (
                <div
                  key={index}
                  className={`h-2-rem border br-rounded ${minuteClass(m)}`}
                  css={{
                    padding: '0 2px',
                    width: i === 0 ? 'calc(100% / 11)' : 'calc(100% / 4)',
                  }}
                />
              ))}
          </div>
          {i === 0 && <Divider />}
        </div>
      ))}
    </div>
  )
}

export default Minutes
