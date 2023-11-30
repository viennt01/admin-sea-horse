import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import UnitPage from '@/components/menu-item/master-data/unit-catalog/unit';

function Unit() {
  return (
    <>
      <Head>
        <title>sea | UNIT</title>
      </Head>
      <UnitPage />
    </>
  );
}

export default withAuthentication(Unit);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'unit']);
