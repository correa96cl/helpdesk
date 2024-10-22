import { Header } from "@/components/header"
import { ListTasks } from "./list/page";
export default async function Home() {




  return (
    <div className="py-4">
      <Header />
      <main>
        <ListTasks />

      </main>
    </div>
  );
}
