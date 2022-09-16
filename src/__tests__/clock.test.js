import { parseFullTime, parseSingleHourToBerlin, parseSingleMinuteToBerlin } from '../utils/utils'

describe('Berlin clock should', () => {
  it.each`
    date          | secondsLight
    ${'00:00:00'} | ${['Y', 'OOOO', 'OOOO', 'OOOOOOOOOOO', 'OOOO', 'YOOOOOOOOOOOOOOOOOOOOOOO']}
    ${'00:00:01'} | ${['O', 'OOOO', 'OOOO', 'OOOOOOOOOOO', 'OOOO', 'OOOOOOOOOOOOOOOOOOOOOOOO']}
    ${'00:00:02'} | ${['Y', 'OOOO', 'OOOO', 'OOOOOOOOOOO', 'OOOO', 'YOOOOOOOOOOOOOOOOOOOOOOO']}
    ${'00:00:03'} | ${['O', 'OOOO', 'OOOO', 'OOOOOOOOOOO', 'OOOO', 'OOOOOOOOOOOOOOOOOOOOOOOO']}
  `(
    'should be $secondsLight based on $date second',
    ({ date, secondsLight }) => {
      expect(parseFullTime(date)).toEqual(secondsLight)
    }
  )
  it.each`
    date          | clockLight
    ${'00:01:00'} | ${['Y', 'OOOO', 'OOOO', 'OOOOOOOOOOO', 'YOOO', 'YOOOOOOOOOOOOOOOOOOOYOOO']}
    ${'00:02:00'} | ${['Y', 'OOOO', 'OOOO', 'OOOOOOOOOOO', 'YYOO', 'YOOOOOOOOOOOOOOOOOOOYYOO']}
    ${'00:03:00'} | ${['Y', 'OOOO', 'OOOO', 'OOOOOOOOOOO', 'YYYO', 'YOOOOOOOOOOOOOOOOOOOYYYO']}
    ${'00:04:00'} | ${['Y', 'OOOO', 'OOOO', 'OOOOOOOOOOO', 'YYYY', 'YOOOOOOOOOOOOOOOOOOOYYYY']}
    ${'00:05:00'} | ${['Y', 'OOOO', 'OOOO', 'YOOOOOOOOOO', 'OOOO', 'YOOOOOOOOYOOOOOOOOOOOOOO']}
    ${'00:56:00'} | ${['Y', 'OOOO', 'OOOO', 'YYRYYRYYRYY', 'YOOO', 'YOOOOOOOOYYRYYRYYRYYYOOO']}
  `('should be $clockLight based on $date', ({ date, clockLight }) => {
    expect(parseFullTime(date)).toEqual(clockLight)
  })

  it.each`
    date          | clockLight
    ${'01:00:00'} | ${['Y', 'OOOO', 'ROOO', 'OOOOOOOOOOO', 'OOOO', 'YOOOOROOOOOOOOOOOOOOOOOO']}
    ${'02:00:00'} | ${['Y', 'OOOO', 'RROO', 'OOOOOOOOOOO', 'OOOO', 'YOOOORROOOOOOOOOOOOOOOOO']}
    ${'03:00:00'} | ${['Y', 'OOOO', 'RRRO', 'OOOOOOOOOOO', 'OOOO', 'YOOOORRROOOOOOOOOOOOOOOO']}
    ${'04:00:00'} | ${['Y', 'OOOO', 'RRRR', 'OOOOOOOOOOO', 'OOOO', 'YOOOORRRROOOOOOOOOOOOOOO']}
    ${'05:00:00'} | ${['Y', 'ROOO', 'OOOO', 'OOOOOOOOOOO', 'OOOO', 'YROOOOOOOOOOOOOOOOOOOOOO']}
  `('should be $clockLightbsed on $date', ({ date, clockLight }) => {
    expect(parseFullTime(date)).toEqual(clockLight)
  })
})


describe("Error Handling for Invalid Time", () => {

  it("Should throw and error for '21:70:00' digital minute", function () {
    expect(parseSingleMinuteToBerlin('21:70:00')).toEqual('invalid enter minute !')
  });


  it("Should throw and error for '25:10:00' digital hour", function () {
    expect(parseSingleHourToBerlin('25:10:00')).toEqual('invalid enter hour !')
  });

   

});