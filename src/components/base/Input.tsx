/** @jsxImportSource @emotion/react */

const styles = {
  container: {},
  input: {
    padding: '0.7em',
    borderRadius: 5,
    outline: 'none',
    border: '1px solid grey',
  },
  label: {},
}
interface InputProps {
  label?: string
  onChange: (e: string) => void
  value: string
  placeholder?: string
}
function Input({ label, onChange, value, placeholder }: InputProps) {
  return (
    <div css={styles.container} className="flex flex-column gap-10">
      <label htmlFor="time">{label} :</label>
      <input
        css={styles.input}
        placeholder={placeholder}
        type="text"
        name="time"
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
