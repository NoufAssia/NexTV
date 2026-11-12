export async function dataFetch() {
  try {
    console.log("fech strated");
    const response = await fetch(
      "https://6af3246ed2377d6c370496dd.mockapi.io/api/v1/channels",
    );

    // const response = new Response(null, {
    //   status: 403,
    //   statusText: "Internal  Error",
    // });
    console.log("http status", response.status);
    console.log("http ok", response.ok);
    if (!response.ok) {
      if(response.status === 404){
        throw new Error("Channels not found. Please try again.")
      }
      if(response.status === 500)
      {
        throw new Error("Server error. we're working to fix it.")
      }
      throw new Error("Something went wrong. Please try again.");
    }
    const channels = await response.json();
    console.log("data received:", channels);
    return channels;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
