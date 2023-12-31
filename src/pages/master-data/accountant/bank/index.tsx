import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import BankPage from '@/components/menu-item/master-data/accounting/bank';

function Bank() {
  return (
    <>
      <Head>
        <title>ASL | BANK</title>
      </Head>
      <BankPage />
    </>
  );
}

export default withAuthentication(Bank);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'bank']);
