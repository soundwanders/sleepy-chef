import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContainerBlock({ children, ...customMeta}) {
  const router = useRouter();

  const meta = {
    title:
      "Sleepy Chef",
    description: [
      `On a journey to the center of the kitchen.`],
    image: "/chef.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://sleepychef.vercel.app${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://sleepychef.vercel.app${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@soundwanders" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
      </Head>
      
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
          <div className="max-w-6xl mx-auto">{children}</div>
        <Footer />
      </main>
    </div>
  )
};
