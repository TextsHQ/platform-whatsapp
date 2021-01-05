import { mapTextAttributes } from '../text-attributes'

const cases = [
  {
    text: ' *bold* _italic_ ',
    result: {
      text: ' bold italic ',
      textAttributes: {
        entities: [
          {
            from: 1,
            to: 5,
            bold: true,
          },
          {
            from: 6,
            to: 10,
            italic: true,
          },
        ],
      },
    },
  },
]

test('text attributes', () => {
  for (const c of cases) {
    expect(mapTextAttributes(c.text)).toEqual(c.result)
  }
})
