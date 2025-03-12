"use server";

import { revalidatePath as revalidate } from "next/cache";

async function revalidatePath(path) {
  revalidate(path, "layout");
}

export default revalidatePath;
