import { mapTextAttributes } from '../text-attributes'

const flatCases = [
  {
    text: '*bold* _italic_ ~strikethrough~',
    result: {
      text: 'bold italic strikethrough',
      textAttributes: {
        entities: [
          {
            from: 0,
            to: 4,
            bold: true,
          },
          {
            from: 5,
            to: 11,
            italic: true,
          },
          {
            from: 12,
            to: 25,
            strikethrough: true,
          },
        ],
      },
    },
  },
  {
    text: 'a*bold* _italic_ ~strikethrough~z',
    result: {
      text: 'a*bold* italic ~strikethrough~z',
      textAttributes: {
        entities: [
          {
            from: 8,
            to: 14,
            italic: true,
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
  {
    text: '*ab_*it*1* **q** 12*_12_',
    result: {
      text: 'ab_*it*1 *q* 12*12',
      textAttributes: {
        entities: [
          {
            from: 0,
            to: 8,
            bold: true,
          },
          {
            from: 9,
            to: 11,
            bold: true,
          },
          {
            from: 16,
            to: 18,
            italic: true,
          },
        ],
      },
    },
  },
  {
    text: '*abc*🤔 *xyz* 123',
    result: {
      text: 'abc🤔 xyz 123',
      textAttributes: {
        entities: [
          {
            from: 0,
            to: 3,
            bold: true,
          },
          {
            from: 5,
            to: 8,
            bold: true,
          },
        ],
      },
    },
  },
  {
    text: 'Test _漢字_ *世界* 12',
    result: {
      text: 'Test 漢字 世界 12',
      textAttributes: {
        entities: [
          {
            from: 5,
            to: 7,
            italic: true,
          },
          {
            from: 8,
            to: 10,
            bold: true,
          },
        ],
      },
    },
  },
  {
    text: 'Inline ``` code ``` should work',
    result: {
      text: 'Inline  code  should work',
      textAttributes: {
        entities: [
          {
            from: 7,
            to: 13,
            code: true,
          },
        ],
      },
    },
  },
  {
    text: '```code``` and ```\n  block\nshould work\n``` as well',
    result: {
      text: 'code and \n  block\nshould work\n as well',
      textAttributes: {
        entities: [
          {
            from: 0,
            to: 4,
            code: true,
          },
          {
            from: 9,
            to: 30,
            code: true,
          },
        ],
      },
    },
  },
  {
    text: '@{{1234@s.whatsapp.net}} hi',
    result: {
      text: '@1234 hi',
      textAttributes: {
        entities: [
          {
            from: 0,
            to: 5,
            mentionedUser: {
              id: '1234@s.whatsapp.net',
              username: '1234@s.whatsapp.net',
            },
          },
        ],
      },
    },
  },
]

const nestedCases = [
  {
    text: 'x *b _it_ ~st~*',
    result: {
      text: 'x b it st',
      textAttributes: {
        entities: [
          {
            from: 4,
            to: 6,
            italic: true,
          },
          {
            from: 7,
            to: 9,
            strikethrough: true,
          },
          {
            from: 2,
            to: 9,
            bold: true,
          },
        ],
      },
    },
  },
]

const cases = [flatCases, nestedCases].flat()

test('text attributes', () => {
  for (const c of cases) {
    expect(mapTextAttributes(c.text)).toEqual(c.result)
  }
})
