export async function dataFetch() {
  const data = await fetch(
    "https://6af3246ed2377d6c370496dd.mockapi.io/api/v1/channels",
  );
  const channels = await data.json();
  return channels;
}
