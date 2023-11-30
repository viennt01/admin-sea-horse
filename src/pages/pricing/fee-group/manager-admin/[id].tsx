import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import FeeGroupManger from '@/components/menu-item/pricing/fee-group/manager';

function FeeManagerPage() {
  return (
    <>
      <Head>
        <title>sea | FEE GROUP MANAGER</title>
      </Head>
      <FeeGroupManger />
    </>
  );
}

export default withAuthentication(FeeManagerPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'feeGroup']);
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
