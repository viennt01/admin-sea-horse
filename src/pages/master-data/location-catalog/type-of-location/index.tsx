import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import TypeOfLocationPage from '@/components/menu-item/master-data/location-catalog/type-of-location';

function TypeOfLocation() {
  return (
    <>
      <Head>
        <title>sea | TYPE OF LOCATION</title>
      </Head>
      <TypeOfLocationPage />
    </>
  );
}

export default withAuthentication(TypeOfLocation);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'typeOfLocation']);
