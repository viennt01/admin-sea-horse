import router from 'next/router';
import {
  FormValues,
  SeaPricingEdit,
  SeaPricingFeeFormValue,
} from '../interface';
import { editSeaPricing } from '../fetcher';
import { useMutation } from '@tanstack/react-query';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';
import SeaPricing from '../components/form';
import { STATUS_ALL_LABELS } from '@/constant/form';
import { returnFeeDTOs } from '../create';

const EditSeaPricing = () => {
  const checkRow = router.query.checkRow as string;
  const updateMutation = useMutation({
    mutationFn: (body: SeaPricingEdit) => {
      return editSeaPricing(body);
    },
  });

  const handleSubmit = (
    formValues: FormValues,
    idQuery?: string,
    seaPricingFeeDTOs?: SeaPricingFeeFormValue[]
  ) => {
    const returnFeeDTO = returnFeeDTOs(
      seaPricingFeeDTOs,
      formValues.seaPricingFeeGroupDTOs
    );
    console.log(seaPricingFeeDTOs);
    console.log(formValues.seaPricingFeeGroupDTOs);

    if (idQuery) {
      const _requestData: SeaPricingEdit = {
        seaPricingID: idQuery,
        podid: formValues.podid || '',
        polid: formValues.polid || '',
        commodityID: formValues.commodityID || '',
        partnerId: formValues.vendorID || '',
        note: formValues.note || '',
        dateEffect: formValues.dateEffect.valueOf(),
        validityDate: formValues.validityDate.valueOf(),
        freqDate: formValues.freqDate || '',
        demSeaPricing: formValues.demSeaPricing || '',
        detSeaPricing: formValues.detSeaPricing || '',
        stoSeaPricing: formValues.stoSeaPricing || '',
        lclMinSeaPricing: formValues.lclMinSeaPricing || '',
        lclSeaPricing: formValues.lclSeaPricing || '',
        currencyID: formValues.currencyID || '',
        public: formValues.public || true,
        seaPricingDetailUpdateRequests: formValues.seaPricingDetailDTOs || [],
        seaPricingFeeGroupUpdateRequests: returnFeeDTO,
        statusSeaPricing:
          formValues.statusSeaPricing || STATUS_ALL_LABELS.ACTIVE,
      };
      updateMutation.mutate(_requestData, {
        onSuccess: (data) => {
          data.status ? successToast(data.message) : errorToast(data.message);
        },
        onError() {
          errorToast(API_MESSAGE.ERROR);
        },
      });
    } else {
      errorToast(API_MESSAGE.ERROR);
    }
  };

  return (
    <SeaPricing
      edit
      handleSubmit={handleSubmit}
      loadingSubmit={updateMutation.isLoading}
      checkRow={checkRow === 'true' ? true : false}
    />
  );
};

export default EditSeaPricing;
