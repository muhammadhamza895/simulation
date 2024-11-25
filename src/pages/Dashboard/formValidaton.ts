import * as Yup from 'yup';

const SimulationSchema = Yup.object().shape({
    numberOfCustomers: Yup.number()
      .required('Number of customers is required')
      .min(1, 'Number of customers is too low')
      .max(10000, 'Number of customers is too high'),
    perUnitTime: Yup.number()
      .required('Per unit time is required')
      .min(1, 'Per unit time is too low')
      .max(10000, 'Per unit time is too high'),
    simulationTime: Yup.number()
      .required('Simulation time is required')
      .min(30, 'Simulation time is too low')
      .max(10000, 'Simulation time is too high'),
  });
  

export default SimulationSchema;
