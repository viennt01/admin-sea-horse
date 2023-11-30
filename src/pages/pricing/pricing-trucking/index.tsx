import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import SeaTrucking from '@/components/menu-item/pricing/trucking';

function PricingTruckingPage() {
  return (
    <>
      <Head>
        <title>sea | TRUCKING PRICING</title>
      </Head>
      <SeaTrucking />
    </>
  );
}

export default withAuthentication(PricingTruckingPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'pricingTrucking']);
