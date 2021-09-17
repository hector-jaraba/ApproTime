export const requestHandler = async (request: () => any) => {
  try {
    const res = await request()
    const data = await res.json()
    return [data]
  } catch (error) {
    return [null, error]
  }
}
