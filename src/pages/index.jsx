import { NextPage } from 'next'
import Image from 'next/image'

import Head from '@/components/Head'
import placeholderImage from '@/images/josh-withers-UnKqaCtnHwE-unsplash.jpg'

export default function Home({}) {
  return (
    <div className={'flex flex-col min-h-screen'}>
      <Head title={'Untitled'} />

      <main className={'flex flex-col p-10 w-full flex-1 space-y-10'}>

        <div className={'space-y-3'}>
          <h1 className={'text-6xl font-bold'}>
            Welcome to{' '}
            <span className="text-blue-600">
            --nextjs-template
          </span>
          </h1>

          <p className={'text-2xl'}>
            Get started by editing{' '}
            <code className={'rounded-md bg-gray-100 p-3 font-mono text-lg'}>
              src/pages/index.tsx
            </code>
          </p>
        </div>

        <div className={'max-w-lg'}>
          <Image
            src={placeholderImage}
            alt=""
            layout="responsive"
            priority
          />
          <p>Image by <a href={'https://unsplash.com/@joshwithers'} className={'underline hover:no-underline'}>Josh Withers</a></p>
        </div>

      </main>

    </div>
  )
}
