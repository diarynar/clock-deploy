/** @jsxImportSource @emotion/react */
interface StandardClockProps {
  times: string
}
function DigitalClock({ times }: StandardClockProps) {
  return (
    <div
      data-testid="standard-clock"
      className="f2"
      css={{
        fontSize: 30,
        marginTop: 20,
      }}
    >
      {times}
    </div>
  )
}

export default DigitalClock
