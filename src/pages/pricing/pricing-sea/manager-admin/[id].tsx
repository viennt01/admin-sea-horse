import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import ManagerSeaPricing from '@/components/menu-item/pricing/sea/manager';

function SeaPricingManagerPage() {
  return (
    <>
      <Head>
        <title>ASL | SEA PRICING MANAGER</title>
      </Head>
      <ManagerSeaPricing />
    </>
  );
}

export default withAuthentication(SeaPricingManagerPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'pricingSea']);
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
