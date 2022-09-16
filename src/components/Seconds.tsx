/** @jsxImportSource @emotion/react */

interface SecondsProps {
  seconds: string
}
const styles = {
  container: {
    position: 'relative',
    ':after': {
      content: '""',
      height: 10,
      width: '70%',
      left: '15%',
      position: 'absolute',
      top: '100%',
    },
  },
}
function Seconds({ seconds }: SecondsProps) {
  const secondsClass = seconds === 'Y' ? 'bg-yellow' : 'bg-grey-dark'
  return (
    <div
      data-testid="seconds"
      className={`w-3-rem h-3-rem border br-circle ${secondsClass}`}
      css={styles.container as any}
    />
  )
}
export default Seconds
