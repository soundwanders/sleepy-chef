export default async function fetchMock(endpoint, options) {
  return Promise.resolve({
    ok: true,
    json: async () => ({ message: 'Mock submission successful' }),
  });
}
