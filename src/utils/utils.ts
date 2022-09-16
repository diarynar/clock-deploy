

// Berlin Single Minute
export function parseSingleMinuteToBerlin(time: string) {
  const times = time.split(':').map(d => parseInt(d));
  const minutes = times[1]
  if (minutes > 59) return 'invalid enter minute !'
  try {
    const uniqueMinute = 'Y'.repeat(minutes % 5) + 'O'.repeat(4 - (minutes % 5))
    return uniqueMinute
  } catch (error) {
    return 'invalid enter minute !'
  }
}


// Berlin Five Minute
export function parseFiveMinuteToBerlin(time: string) {
  const times = time.split(':').map(d => parseInt(d));
  const minutes = times[1]
  if (minutes > 59) return 'invalid enter minute !'
  try {
    const fiveMinute = ('Y'.repeat(minutes / 5) + 'O'.repeat(11 - Math.floor(minutes / 5)))
      .split('')
      .map((c: string, index: number) => (index + 1) % 3 === 0 && c === 'Y' ? 'R' : c)
      .join('')
    return fiveMinute
  } catch (error) {
    return 'invalid enter time !'
  }
}


// Berlin Single Hour
export function parseSingleHourToBerlin(time: string) {
  const times = time.split(':').map(d => parseInt(d));
  const hours = times[0]
  if (hours > 23) return 'invalid enter hour !'
  try {
    const hour = 'R'.repeat(hours % 5) + 'O'.repeat(4 - (hours % 5))
    return hour
  } catch (error) {
    return 'invalid enter hour !'
  }
}


// Berlin Five Hour
export function parseFiveHourToBerlin(time: string) {
  const times = time.split(':').map(d => parseInt(d));
  const hours = times[0]
  if (hours > 23) return 'invalid enter hour !'
  try {
    const hour = 'R'.repeat(hours / 5) + 'O'.repeat(4 - Math.floor(hours / 5))
    return hour
  } catch (error) {
    return 'invalid enter hour !'
  }
}


// Berlin Seconds
export function parseSecondToBerlin(time: string) {
  const times = time.split(':').map(d => parseInt(d));
  const seconds = times[2]
  if (seconds > 59) return 'invalid enter seconds !'
  try {
    const second = seconds % 2 === 0 ? 'Y' : 'O'
    return second
  } catch (error) {
    return 'invalid enter seconds !'
  }
}


// To parse digital string time to berlin clock
export function parseFullTime(date: string) {
  const secondsRow = parseSecondToBerlin(date)
  const fiveHourRow = parseFiveHourToBerlin(date)
  const onHourRow = parseSingleHourToBerlin(date)
  const fiveMinuteRow = parseFiveMinuteToBerlin(date)
  const oneMinuteRow = parseSingleMinuteToBerlin(date)
  const times = [secondsRow, fiveHourRow, onHourRow, fiveMinuteRow, oneMinuteRow]
  return [...times, times.join('')]
}

// Convert Berlin Clock To Digital Clock
export function parseBerlinToDigital(times: string) {
  const secondsRow = times.substring(0, 1);
  const fiveHourRow = times.substring(1, 5);
  const onHourRow = times.substring(5, 9);
  const fiveMinuteRow = times.substring(9, 20);
  const oneMinuteRow = times.substring(20, 24);

  const fiveMinutes = fiveMinuteRow.split('').filter((value: string) => value !== 'O').length
  const minutes = 5 * (fiveMinutes) + (oneMinuteRow.split('Y').length - 1)
  const seconds = secondsRow === 'Y' ? 1 : 0
  const hours = 5 * (fiveHourRow.split('R').length - 1) + (onHourRow.split('R').length - 1)

  if (secondsRow && fiveHourRow && onHourRow && fiveMinuteRow && oneMinuteRow) {
    const h = formatHoursOrMinutesOrSeconds(hours)
    const m = formatHoursOrMinutesOrSeconds(minutes)
    const s = formatHoursOrMinutesOrSeconds(seconds)
    return `${h}:${m}:${s}`
  }
  return 'invalid'
}

// To format seconds|minutes|hour digital display
export function formatHoursOrMinutesOrSeconds(time: number) {
  return time < 10 ? `0${time}` : `${time}`
}

// Digital display time
export function startClock(date: Date) {
  const h = formatHoursOrMinutesOrSeconds(date.getHours())
  const m = formatHoursOrMinutesOrSeconds(date.getMinutes())
  const s = formatHoursOrMinutesOrSeconds(date.getSeconds())
  return `${h}:${m}:${s}`
}

