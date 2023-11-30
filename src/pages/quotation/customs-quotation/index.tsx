import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import CustomsQuotation from '@/components/menu-item/quotation/custom';

function CustomsQuotationPage() {
  return (
    <>
      <Head>
        <title>sea | CUSTOMS QUOTATION</title>
      </Head>
      <CustomsQuotation />
    </>
  );
}

export default withAuthentication(CustomsQuotationPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'customsQuotation']);
