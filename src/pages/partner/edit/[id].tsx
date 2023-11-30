import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import EditPartner from '@/components/menu-item/partner/edit';

function EditPartnerPage() {
  return (
    <>
      <Head>
        <title>sea | EDIT PARTNER</title>
      </Head>
      <EditPartner />
    </>
  );
}

export default withAuthentication(EditPartnerPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'partner']);
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
