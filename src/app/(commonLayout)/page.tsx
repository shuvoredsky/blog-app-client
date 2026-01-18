import { authClient } from "@/lib/auth-client";
import { Button } from "../../components/ui/button";

export default async function Home() {

  const session = authClient.getSession();

  console.log("console from page .tssx", session)

  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
