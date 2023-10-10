export default function Head() {
  const favicon16 = process.env.BASE_PATH + '/static/favicons/favicon-16x16.png'
  const favicon32 = process.env.BASE_PATH + '/static/favicons/favicon-32x32.png'
  const faviconApple = process.env.BASE_PATH + '/static/favicons/apple-touch-icon.png'
  const pinnedTab = process.env.BASE_PATH + '/static/favicons/safari-pinned-tab.svg'
  const webmanifest = process.env.BASE_PATH + '/static/favicons/site.webmanifest'
  return (
    <>
      <link rel="apple-touch-icon" sizes="76x76" href={faviconApple} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="manifest" href={webmanifest} />
      <link rel="mask-icon" href={pinnedTab} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  )
}
