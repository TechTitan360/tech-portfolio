import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home or another valid page
    router.push("/");
  }, []);

  return <p>Redirecting...</p>;
}
    