import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const cookieStore = await cookies(); 
  const cookie = cookieStore.get(process.env.PASSWORD_COOKIE_NAME)?.value;

  if (!cookie) {
    redirect("/login");
  }
  return null;
}
