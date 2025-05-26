export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const apiUrl = `${process.env.API_URL}/v1/seo/robots.txt`;

    const res = await fetch(apiUrl, {
      next: { revalidate: 0 },
      headers: {
        Accept: "text/plain",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      // В случае ошибки возвращаем информацию о проблеме прямо в robots.txt в виде комментария
      return new Response(
        `# Error fetching robots.txt\n` +
          `# Status: ${res.status}\n` +
          `# URL: ${apiUrl}\n\n` +
          `User-agent: *\nDisallow: /`,
        {
          headers: {
            "Content-Type": "text/plain",
            "X-Debug-Info": "Failed to fetch robots.txt",
          },
        }
      );
    }

    const robotsTxt = await res.text();

    // Если содержимое пустое, возвращаем отладочную информацию
    if (!robotsTxt.trim()) {
      return new Response(
        `# Warning: Received empty robots.txt\n` +
          `# URL: ${apiUrl}\n` +
          `# Response Status: ${res.status}\n\n` +
          `User-agent: *\nDisallow: /`,
        {
          headers: {
            "Content-Type": "text/plain",
            "X-Debug-Info": "Empty response received",
          },
        }
      );
    }

    return new Response(robotsTxt, {
      headers: {
        "Content-Type": "text/plain",
        "X-Debug-Info": "Success",
      },
    });
  } catch (error) {
    return new Response(
      `# Error in robots.txt handler\n` +
        `# Error: ${error.message}\n\n` +
        `User-agent: *\nDisallow: /`,
      {
        headers: {
          "Content-Type": "text/plain",
          "X-Debug-Info": "Internal error",
        },
      }
    );
  }
}
