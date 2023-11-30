import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import EditTypeOfContainer from '@/components/menu-item/master-data/type-of-container/edit';

function TypeOfContainerEditPage() {
  return (
    <>
      <Head>
        <title>ASL | TYPE OF CONTAINER EDIT</title>
      </Head>
      <EditTypeOfContainer />
    </>
  );
}

export default withAuthentication(TypeOfContainerEditPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'typeOfContainer']);
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
