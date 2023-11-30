import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import EditTruckingPricing from '@/components/menu-item/pricing/trucking/edit';

function EditTruckingPricingPage() {
  return (
    <>
      <Head>
        <title>ASL | TRUCKING PRICING EDIT</title>
      </Head>
      <EditTruckingPricing />
    </>
  );
}

export default withAuthentication(EditTruckingPricingPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'pricingTrucking']);
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
