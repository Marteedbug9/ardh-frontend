import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Contact() {
  const { t } = useTranslation('common')
  return (
    <main className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">{t('contact')}</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input className="border px-2 py-1 rounded" placeholder="Email" />
        <textarea className="border px-2 py-1 rounded" placeholder={t('your_message', "Votre message...")} />
        <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
          {t('send', "Envoyer")}
        </button>
      </form>
    </main>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
