import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Domains() {
  const { t } = useTranslation('common');
  return (
    <main className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">{t('domains')}</h1>
      <ul className="list-disc max-w-xl">
        <li>{t('domain_housing', "Logement")}</li>
        <li>{t('domain_education', "Éducation")}</li>
        <li>{t('domain_job', "Insertion professionnelle")}</li>
        <li>{t('domain_health', "Santé mentale et soins")}</li>
        <li>{t('domain_legal', "Accompagnement juridique")}</li>
      </ul>
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
