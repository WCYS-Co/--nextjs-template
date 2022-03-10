import type { NextPage } from 'next'
import Head from '@components/Head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title={"WCYS & Co."} />

      <main className="flex flex-col pt-10 px-10 w-full flex-1">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-blue-600">
            --nextjs-template
          </span>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>
      </main>

    </div>
  )
}

export default Home
