import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import EditStaff from '@/components/menu-item/system/staff/edit';

function EditStaffPage() {
  return (
    <>
      <Head>
        <title>sea | EDIT STAFF</title>
      </Head>
      <EditStaff />
    </>
  );
}

export default withAuthentication(EditStaffPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'staff']);
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
