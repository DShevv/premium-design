export async function getSeoText(page) {
  try {
    const res = await fetch(`${process.env.API_URL}/v1/seo/text?page=${page}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data.content;
  } catch (error) {
    console.log(error);
    return null;
  }
}
