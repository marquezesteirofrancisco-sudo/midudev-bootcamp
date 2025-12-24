const { test, describe } = require('node:test')
const assert = require('node:assert')


const reverse = require('../utils/for_testing.jsx').reverse


describe('reverse', () => {

    test('reverse of a', () => {
      const result = reverse('a')

      assert.strictEqual(result, 'a')
    })

    test('reverse of react', () => {
      const result = reverse('react')

      assert.strictEqual(result, 'tcaer')
    })

    test('reverse of amor', () => {
      const result = reverse('amor')

      assert.strictEqual(result, 'roma')
    })

})