import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import Partner from '@/components/menu-item/partner';

function PartnerPage() {
  return (
    <>
      <Head>
        <title>ASL | PARTNER</title>
      </Head>
      <Partner />
    </>
  );
}

export default withAuthentication(PartnerPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'partner']);
