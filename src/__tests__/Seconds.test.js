import { cleanup, render } from '@testing-library/react'

import Seconds from '../components/Seconds'

afterEach(cleanup)

describe('Seconds should', () => {
  test('render a yellow circle if second is even', () => {
    const { getByTestId } = render(<Seconds seconds="Y" />)
    const secondsComponent = getByTestId('seconds')
    const secondsComponentColorIsYellow = secondsComponent.className.includes(
      'bg-yellow'
    )
    expect(secondsComponentColorIsYellow).toBeTruthy()
  })

  test('render a dark-grey circle if second is even', () => {
    const { getByTestId } = render(<Seconds seconds="O" />)
    const secondsComponent = getByTestId('seconds')
    const secondsComponentColorIsDarkGray = secondsComponent.className.includes(
      'bg-grey-dark'
    )
    expect(secondsComponentColorIsDarkGray).toBeTruthy()
  })
})
