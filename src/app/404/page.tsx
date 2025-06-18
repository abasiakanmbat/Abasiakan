'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

const funnyQuotes = [
  "We're not lazy — just on a coffee break.",
  "Even Rome took a while to build.",
  "Our dev is fighting bugs with a hammer.",
  "Meanwhile, our cat deployed the site… to /dev/null.",
  "Just waiting on one more npm install… probably.",
]

export default function UnderConstructionPage() {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % funnyQuotes.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>Page Under Construction</title>
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white p-6 text-center">
        {/* Animated SVG */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-40 h-40 mb-6"
          >
          </motion.div> */}
          {/* <Image
            src="/worker.svg"
            alt="Animated Worker"
            width={160}
            height={160}
            className="mx-auto"
            /> */}
            <iframe src="https://lottie.host/embed/6d95879c-42c6-49ef-acd5-6181c345e59d/1qslRnhZZw.lottie"></iframe>

        {/* Under Construction Header */}
        <motion.h1
          className="text-4xl font-bold mb-3"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatType: 'reverse',}}
        >
          Page Under Construction
        </motion.h1>

        {/* Funny Quote */}
        <motion.p
          key={quoteIndex}
          className="text-lg italic text-zinc-300 mt-2 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {funnyQuotes[quoteIndex]}
        </motion.p>
      </div>
    </>
  )
}
