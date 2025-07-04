import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('common');
  return (
    <main className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">{t('about')}</h1>
      <p className="text-center max-w-xl">
        {/* Tu peux ici ajouter le texte de présentation de l’association (à traduire dans chaque langue dans le JSON). */}
        {t(
          'about_text',
          "ARDH est une organisation à but non lucratif qui œuvre pour l'intégration des immigrants et réfugiés."
        )}
      </p>
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
