export async function dataFetch() {
  try {
    console.log("fech strated");
    const response = await fetch(
      "https://6af3246ed2377d6c370496dd.mockapi.io/api/v1/channels",
    );

    // const response = new Response(null, {
    //   status: 500,
    //   statusText: "Internal Server Error",
    // });
    console.log("http status", response.status);
    console.log("http ok", response.ok);
    if (!response.ok) {
      throw new Error(`http error: ${response.status}`);
    }
    const channels = await response.json();
    console.log("data received:", channels);
    return channels;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
