export async function GET() {
  const res = await fetch(`${process.env.API_URL}/v1/seo/sitemap.xml`, {
    next: { cache: "no-cache" },
  }); // API должен возвращать XML
  const sitemapXml = await res.text();

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
