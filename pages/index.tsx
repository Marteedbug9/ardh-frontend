import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '@components/LanguageSwitcher';  // <-- correction ici

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className="flex flex-col items-center py-8">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold mb-6">{t('welcome')}</h1>
      <p className="text-xl mb-8">{t('slogan')}</p>
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
  };
}
