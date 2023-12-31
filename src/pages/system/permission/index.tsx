import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import PermissionPage from '@/components/menu-item/system/permission';

function Permission() {
  return (
    <>
      <Head>
        <title>ASL | PERMISSION</title>
      </Head>
      <PermissionPage />
    </>
  );
}

export default withAuthentication(Permission);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'permission']);
