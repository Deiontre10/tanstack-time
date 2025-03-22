// app/routes/index.tsx
import * as fs from 'node:fs'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import '../app.css'

const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0')
  )
}

const getCount = createServerFn({
  method: 'GET'
}).handler(() => {
  return readCount()
})

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount()
    await fs.promises.writeFile(filePath, `${count + data}`)
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount()
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center'>
      <div className='bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl'>
        <button
          type='button'
          onClick={() => {
            updateCount({ data: 1 }).then(() => {
              router.invalidate()
            })
          }}
          className='px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg 
            hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 
            shadow-lg hover:shadow-xl active:scale-95'
        >
          Count: {state}
        </button>
      </div>
    </div>
  )
}
