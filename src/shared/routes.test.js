import { helloEndpointroute } from './routes'

test('helloEndpointroute', () => {
  expect(helloEndpointroute()).toBe('/ajax/hello/:num')
  expect(helloEndpointroute(123)).toBe('/ajax/hello/123')
})
