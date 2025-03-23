import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  return (
    <div className='text-center'>
      <header className='min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]'>
        <h1 className='text-3xl font-bold p-4'>Task Manager</h1>
        <Button>PUSH ME</Button>
      </header>
    </div>
  )
}
