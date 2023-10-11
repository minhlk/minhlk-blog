// import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default async function Projects() {
  const page1 = await (
    await fetch('https://api.github.com/users/minhlk/repos?sort=created-desc')
  ).json()
  const page2 = await (
    await fetch('https://api.github.com/users/minhlk/repos?sort=created-desc&page=2')
  ).json()
  const projectsData = [...page1, ...page2]
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A list of projects I have been working on or built
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.name}
                title={d.name}
                description={d.description}
                href={d.svn_url}
                topics={d.topics}
                star={d.stargazers_count}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
