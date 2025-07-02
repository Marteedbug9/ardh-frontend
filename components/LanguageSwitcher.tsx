import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locales, locale, asPath } = router

  return (
    <div className="flex gap-2 my-4">
      {locales?.map((lng) => (
        <button
          key={lng}
          onClick={() => router.push(asPath, asPath, { locale: lng })}
          className={`px-2 py-1 rounded ${locale === lng ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
