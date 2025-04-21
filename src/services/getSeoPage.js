export async function getSeoPage(page) {
  try {
    const res = await fetch(`${process.env.API_URL}/v1/seo/tag?name=${page}`, {
      next: { revalidate: 60 },
    });
    const seo = await res.json();

    return { seo };
  } catch (error) {
    console.log(error);
    return { seo: undefined };
  }
}
