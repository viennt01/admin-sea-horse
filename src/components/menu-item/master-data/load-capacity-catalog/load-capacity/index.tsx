import { Tabs } from 'antd';
import MasterDataTable from './table/master-table';
import RequestTable from './table/request-table';
import COLORS from '@/constant/color';
import { useQueryClient } from '@tanstack/react-query';
import { API_LOAD_CAPACITY } from '@/fetcherAxios/endpoint';

export default function LoadCapacity() {
  const queryClient = useQueryClient();

  const onChange = (key: string) => {
    queryClient.invalidateQueries({
      queryKey: [key],
    });
  };

  return (
    <Tabs
      onChange={onChange}
      type="card"
      style={{ marginTop: 10 }}
      items={[
        {
          label: 'Master Data',
          key: API_LOAD_CAPACITY.GET_SEARCH,
          children: <MasterDataTable />,
        },
        {
          label: (
            // <Badge
            //   count={2}
            //   style={{
            //     marginRight: '-10px',
            //   }}
            // >
            //   <div
            //     style={{
            //       color: COLORS.GREEN,
            //     }}
            //   >
            //     Request
            //   </div>
            // </Badge>
            <div
              style={{
                color: COLORS.GREEN,
              }}
            >
              Request
            </div>
          ),
          key: API_LOAD_CAPACITY.GET_REQUEST,
          children: <RequestTable />,
        },
      ]}
    />
  );
}
