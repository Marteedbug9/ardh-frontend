import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Donate() {
  const { t } = useTranslation('common');

  return (
    <main className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">{t('donate')}</h1>
      <p className="mb-6 text-center max-w-lg">
        {t(
          'donate_intro',
          'Votre soutien permet à ARDH d’accompagner plus de réfugiés et de familles vulnérables. Merci pour votre générosité !'
        )}
      </p>

      <form className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded shadow">
        <input
          className="border px-3 py-2 rounded"
          placeholder={t('your_name', 'Votre nom')}
          name="name"
          required
        />
        <input
          className="border px-3 py-2 rounded"
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <input
          className="border px-3 py-2 rounded"
          placeholder={t('amount', 'Montant (USD)')}
          name="amount"
          type="number"
          min={1}
          required
        />
        <textarea
          className="border px-3 py-2 rounded"
          placeholder={t('your_message', 'Votre message (optionnel)')}
          name="message"
        />
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded font-bold hover:bg-green-800"
        >
          {t('donate')}
        </button>
      </form>
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
