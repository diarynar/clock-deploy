/** @jsxImportSource @emotion/react */

const styles = {
  button: {
    padding: '0.7em',
    borderRadius: 5,
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      opacity: 0.7,
    },
  },
}
interface ButtonProps {
  label: string
  onClick: () => void
}
function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="bg-gradiant-orange"
      css={styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
