import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import CommodityEditPage from '@/components/menu-item/master-data/commodity/edit';

function CommodityEdit() {
  return (
    <>
      <Head>
        <title>sea | COMMODITY</title>
      </Head>
      <CommodityEditPage />
    </>
  );
}

export default withAuthentication(CommodityEdit);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'commodity']);
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
