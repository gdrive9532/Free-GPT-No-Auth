'use client'

import {useState} from "react";
import Side from '@/components/side'
import { Site } from "@/types/type";
import Link from "next/link";


const sites: Site[] = [
  {
    title: 'FreeGPT',
    modelType: ['gpt3'],
    url: 'https://chat.api-box.com',
  },
  {
    title: 'acytoo',
    modelType: ['gpt3'],
    url: 'https://chat.acytoo.com/',
  },
  {
    title: 'gpt2',
    modelType: ['gpt3'],
    url: 'https://chat.getgpt.world',
  },
  {
    title: 'ai.ls',
    modelType: ['gpt3'],
    url: 'https://ai.ls/',
  },
  {
    title: 'ikunn',
    modelType: ['gpt3'],
    url: 'https://ikunn.icu/',
  }
]

export default function Home() {

  const [site, setSite] = useState<Site>()

  /**
   * change site
   * @param site Site
   * @returns void
   */
  const handleChangeSite = (site: Site)=> {
    if (!site) return
    const {url, newWindow} = site
    if (newWindow){
      // open in a new window
      window.open(url)
      return
    }
    // open in the same window
    setSite(site)
  }


  return (
    <main className="flex flex-col md:flex-row">
      <Side onChange={handleChangeSite} sites={sites} site={site} />
      <main className="flex-1">
        {
          site?.url ? (
            <div>
              <iframe
                key={site?.url}
                className="w-full h-screen"
                src={site?.url}
              />
            </div>
          ): (
            <div className="flex flex-col items-center justify-center h-full">
              <Link className="" href="https://github.com/zsio/Free-GPT-No-Auth">
                <h1 className="p-4 pl-8 pr-8 text-2xl font-bold border rounded shadow-xl">
                  Free GPT 🆓 No Auth ⛔
                </h1>
              </Link>

              <div className="p-6 text-center">
                <p>
                  Free to use public api，Availability not guaranteed。
                </p>
                <p className="p-2">Prefer using FreeGPT,If the reply is slow, you need to wait patiently</p>
              </div>
              <div className="p-6 text-center">
                <p>
                  Source code source <Link className="text-blue-400" href="https://github.com/zsio/Free-GPT-No-Auth">GitHub：zsio/Free-GPT-No-Auth</Link>
                </p>

              </div>
            </div>
          )
        }
      </main>
    </main>
  )
}
