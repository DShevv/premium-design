export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/v1/seo/feed.xml`, {
    next: { revalidate: 0 },
    cache: "no-store",
  });
  const sitemapXml = await res.text();

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
