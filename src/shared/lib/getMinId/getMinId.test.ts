import { getMinId } from './index'

describe('getMinId test', () => {
  test('with num arr', () => {
    const ids = [10, 20, 3, 5, 3, 1, 6, 2, 59]
    expect(getMinId(ids)).toBe(1)
  })

  test('with num arr2', () => {
    const ids = [10, 20, 3, 5, 3, 6, 2, 59]
    expect(getMinId(ids)).not.toBe(1)
    expect(getMinId(ids)).toBe(2)
  })

  test('with empty arr', () => {
    expect(getMinId([])).toBeNull()
  })
})