import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export default function Navbar() {
  const { t } = useTranslation('common')
  return (
    <nav className="flex gap-6 p-4 bg-green-100">
      <Link href="/">{t('welcome')}</Link>
      <Link href="/about">{t('about')}</Link>
      <Link href="/domains">{t('domains')}</Link>
      <Link href="/join">{t('join')}</Link>
      <Link href="/contact">{t('contact')}</Link>
    </nav>
  )
}
