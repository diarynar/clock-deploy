import { cleanup, render } from '@testing-library/react'

import CurrentClockDisplay from '../components/CurrentClockDisplay'

afterEach(cleanup)

describe('CurrentClockDisplay should', () => {
  test('render BerlinClock', () => {
    const { getByTestId } = render(<CurrentClockDisplay />)
    expect(getByTestId('berlin-clock')).toBeTruthy()
  })

  test('render StandardClock', () => {
    const { getByTestId } = render(<CurrentClockDisplay />)
    expect(getByTestId('standard-clock')).toBeTruthy()
  })
})
