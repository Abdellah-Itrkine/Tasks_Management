import {AddTask} from '../components/AddTask'

export default function Home() {
  return (
    <main className="grid max-w-4xl mx-auto mt-4">
      <div className='text-center my-5 flex flex-col gap-4'>        
        <h1 className="text-2xl font-bold'">Tasks</h1>
        <AddTask />
      </div>
    </main>
  )
}
