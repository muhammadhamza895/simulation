import { axiosInstance, baseUrl } from './instance';
import { toast } from 'react-toastify';

export interface SimulationDataInterface {
  numberOfCustomers: number;
  perUnitTime: number;
  simulationTime: number;
}

export const startSimulation = async ({
  numberOfCustomers,
  perUnitTime,
  simulationTime,
}: SimulationDataInterface) => {
  try {
    const lambda = numberOfCustomers/ perUnitTime;
    const { data } = await axiosInstance.post(
      baseUrl + '/arrival/get-arrival-graph-data',
      {
        lambda,
        simulationTime,
      },
    );
    toast.success('Simulation successfull');
    return data;
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong');
  }
};
