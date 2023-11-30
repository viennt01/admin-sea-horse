import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import Staff from '@/components/menu-item/system/staff';

function StaffPage() {
  return (
    <>
      <Head>
        <title>sea | STAFF</title>
      </Head>
      <Staff />
    </>
  );
}

export default withAuthentication(StaffPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'staff']);
