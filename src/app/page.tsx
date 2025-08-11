import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Home() {
  return (
  <div className="gap-y-8 flex flex-col p-4">
    <Button variant={"elevated"}> Button</Button>
    <Input placeholder="input" />
    <Progress value={50} />
    <Checkbox />
  </div>
  );
}
