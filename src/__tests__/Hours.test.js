import { cleanup, render } from '@testing-library/react'

import  Hours  from '../components/Hours'

afterEach(cleanup)

describe('Hours should', () => {
  test('render 4 rectangle ', () => {
    const { container } = render(<Hours hours={['ROOO', 'ROOO']} />)
    expect(container.firstChild.firstChild).toMatchSnapshot()
  })
})
