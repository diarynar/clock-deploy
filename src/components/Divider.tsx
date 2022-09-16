
/** @jsxImportSource @emotion/react */
const styles = {
  container: {
    height: 8,
    width: '70%',
    margin: 'auto',
  },
  paragraph: {
    height: 5,
    width: "35%",
    margin: 'auto',
  }
}
export function Divider() {
  return (
    <div className='flex flex-column items-center bg-grey' css={styles.container}>
      <p className='bg-dark' css={styles.paragraph}></p>
    </div>
  )
}

