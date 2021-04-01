addEventListener("fetch", (event) => {
  const response = new Response("piyo!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});