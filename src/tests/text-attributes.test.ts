import { mapTextAttributes } from '../text-attributes'

const cases = [
  {
    text: 'a*bold* _italic_ ~strikethrough~',
    result: {
      text: 'abold italic strikethrough',
      textAttributes: {
        entities: [
          {
            from: 1,
            to: 5,
            bold: true,
          },
          {
            from: 6,
            to: 12,
            italic: true,
          },
          {
            from: 13,
            to: 26,
            strikethrough: true,
          },
        ],
      },
    },
  },
  {
    text: '*b _*it_*',
    result: {
      text: 'b _*it_',
      textAttributes: {
        entities: [
          {
            from: 0,
            to: 7,
            bold: true,
          },
        ],
      },
    },
  },
  {
    text: '*a**b*c*',
    result: {
      text: 'a*b*c*',
      textAttributes: {
        entities: [
          {
            from: 0,
            to: 1,
            bold: true,
          },
        ],
      },
    },
  },
  {
    text: '*a*_*b*c*',
    result: {
      text: 'a_b*c',
      textAttributes: {
        entities: [
          {
            from: 0,
            to: 1,
            bold: true,
          },
          {
            from: 2,
            to: 5,
            bold: true,
          },
        ],
      },
    },
  },
]

test('text attributes', () => {
  for (const c of cases.slice(0)) {
    expect(mapTextAttributes(c.text)).toEqual(c.result)
  }
})
