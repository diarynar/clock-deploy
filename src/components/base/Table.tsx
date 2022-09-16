/** @jsxImportSource @emotion/react */
const styles = {
  table: {
    borderCollapse: 'collapse',
    width: '70%',
    margin: 'auto',
    backgroundColor: ' #fff',
    th: {
      fontSize: 12,
      color: '#fff',
      lineHeight: 1.4,
      textTransform: 'uppercase',
      backgroundColor: '#002933',
      padding: '18px 5px',
    },
    td: {
      fontSize: 14,
      color: '#000',
      letterSpacing: 3,
      lineHeight: 1.4,
      position: 'relative',
      padding: '18px 10px',
      textAlign: 'center',
    },
  },
}

interface TableProps {
  headers: string[]
  datas: string[]
}
// this is just a basic table for a string array
function Table({ datas, headers }: TableProps) {
  return (
    <table border={1} css={styles.table as any}>
      <thead>
        <tr>
          {headers.map((title: string, index: number) => (
            <th key={index}> {title} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {datas.map((value: string, index: number) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
        <tr></tr>
      </tbody>
    </table>
  )
}

export default Table
