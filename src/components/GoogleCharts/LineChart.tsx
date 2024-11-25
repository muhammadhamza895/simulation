import { Chart } from 'react-google-charts';
// const options = {
//   chart: {
//     title: 'Company Performance',
//     subtitle: 'Sales and Expenses over the Years',
//   },
// };

interface Props {
  chartData: any;
}

function LineChart({ chartData }: Props) {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={chartData}
    //   options={options}
    />
  );
}

export default LineChart;
