import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import CreateFeeGroup from '@/components/menu-item/pricing/fee-group/create';

function CreateFeeGroupPage() {
  return (
    <>
      <Head>
        <title>sea | CREATE FEE GROUP</title>
      </Head>
      <CreateFeeGroup />
    </>
  );
}

export default withAuthentication(CreateFeeGroupPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'feeGroup']);
