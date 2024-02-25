import Charts from "react-apexcharts";
import { Box, Grid } from "@chakra-ui/react";
import {
  chartOptions,
  seriesData,
} from "src/components/dashboard/data/chartOptionsData";

const Summary = () => {
  return (
    <Grid
      height="100%"
      gridTemplateColumns="repeat(2,1fr)"
      gridTemplateRows="repeat(2,1fr)"
      gap={3}
    >
      <Box
        bgColor="white"
        borderRadius={10}
        boxShadow="0 0 2px 2px rgb(0,0,0,.05)"
        m={1}
        width="100%"
        height="100%"
        overflowY="auto"
      >
        <Charts
          options={chartOptions[0]}
          series={seriesData[0]}
          type="bar"
          height={900}
        />
      </Box>
      <Box
        bgColor="white"
        borderRadius={10}
        boxShadow="0 0 2px 2px rgb(0,0,0,.05)"
        m={1}
        width="100%"
        height="100%"
      >
        <Charts options={chartOptions[1]} series={seriesData[1]} type="pie" />
      </Box>
    </Grid>
  );
};

export default Summary;
