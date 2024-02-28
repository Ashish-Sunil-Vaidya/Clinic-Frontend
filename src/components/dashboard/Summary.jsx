import { Box, Grid } from "@chakra-ui/react";
import MiniStatistics from "src/components/dashboard/cards/MiniStatistics";
import revenueData from "src/components/dashboard/data/revenue.data";
import BarChart from "../charts/BarChart";

const Summary = () => {
  return (
    <Box>
      <Grid
        height="100%"
        width="95%"
        mx="auto"
        mt={3}
        gridTemplateColumns={{
          // base: "repeat(4,1fr)",
          sm: "1fr",
          md:"repeat(4,1fr)",
          lg:"repeat(4,1fr)",
          xl:"repeat(4,1fr)",
        }}
        gap={3}
      >
        {revenueData.map((data, index) => (
          <MiniStatistics
            title={data.title}
            amount={data.amount}
            percentage={data.percentage}
            icon={data.icon}
            key={index}
          />
        ))}
      </Grid>
      <BarChart />
    </Box>
  );
};

export default Summary;
