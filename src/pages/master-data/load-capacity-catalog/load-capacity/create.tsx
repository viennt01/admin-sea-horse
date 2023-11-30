import Head from 'next/head';
import withAuthentication from '@/hook/useAuthentication';
import CreateLoadCapacity from '@/components/menu-item/master-data/load-capacity-catalog/load-capacity/create';

function CreateLoadCapacityPage() {
  return (
    <>
      <Head>
        <title>sea | CREATE LOAD CAPACITY</title>
      </Head>
      <CreateLoadCapacity />
    </>
  );
}

export default withAuthentication(CreateLoadCapacityPage);
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'loadCapacity']);
