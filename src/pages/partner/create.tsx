import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import CreatePartner from '@/components/menu-item/partner/create';

function CreatePartnerPage() {
  return (
    <>
      <Head>
        <title>sea | CREATE PARTNER</title>
      </Head>
      <CreatePartner />
    </>
  );
}

export default withAuthentication(CreatePartnerPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'partner']);
