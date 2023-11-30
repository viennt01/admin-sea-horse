import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import TruckingQuotation from '@/components/menu-item/quotation/trucking';

function TruckingQuotationPage() {
  return (
    <>
      <Head>
        <title>sea | TRUCKING QUOTATION</title>
      </Head>
      <TruckingQuotation />
    </>
  );
}

export default withAuthentication(TruckingQuotationPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'truckingQuotation']);
