import ConvertBerlinToDigital from '../components/ConvertBerlinToDigital'
import ConvertDigitalToBerlin from '../components/ConvertDigitalToBerlin'
import CurrentClockDisplay from '../components/CurrentClockDisplay'

// To display all clock fonctionnality
function BerlinClockPage() {
  return (
    <div className="clock-container  flex flex-column gap-20 ">
      <ConvertDigitalToBerlin />
      <ConvertBerlinToDigital />
      <CurrentClockDisplay />
    </div>
  )
}

export default BerlinClockPage
