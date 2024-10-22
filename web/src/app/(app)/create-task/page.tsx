import { Header } from '@/components/header'
import { ListTasks } from '../list/page'

export default function CreateTask() {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <ListTasks />
    </div>
  )
}