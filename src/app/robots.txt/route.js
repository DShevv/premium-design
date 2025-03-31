export async function GET() {
  const res = await fetch(`${process.env.API_URL}/v1/seo/robots.txt`); // API должен возвращать robots.txt как текст
  const robotsTxt = await res.text();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
