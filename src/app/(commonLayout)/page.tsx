import { userService } from "@/services/user.services";
import { Button } from "../../components/ui/button";

export default async function Home() {

  const {data} = await userService.getSession()
  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
