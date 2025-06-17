import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, userId as string),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}
