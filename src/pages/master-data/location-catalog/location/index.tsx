import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import LocationPage from '@/components/menu-item/master-data/location-catalog/location';

function Location() {
  return (
    <>
      <Head>
        <title>ASL | LOCATION</title>
      </Head>
      <LocationPage />
    </>
  );
}

export default withAuthentication(Location);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'location']);
