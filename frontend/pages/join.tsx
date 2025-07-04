import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Join() {
  const { t } = useTranslation('common');
  return (
    <main className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">{t('join')}</h1>
      <p>{t('become_volunteer')}</p>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
        {t('donate')}
      </button>
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
