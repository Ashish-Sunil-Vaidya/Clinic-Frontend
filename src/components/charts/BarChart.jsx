// BarChart.js
import { Box, Flex } from "@chakra-ui/react";
import Charts from "react-apexcharts";
import { useState } from "react";

const BarChart = () => {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            title: {
                text: "Patients visited per month",
                align: "center",
                margin: 20,
                style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                },
            },
        },
        series: [
            {
                name: "Sales",
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 145, 180],
            },
        ],
    });

    return (
        <Box
            bg="white"
            boxShadow="5px 5px 7px 5px rgb(0,0,0,.05)"
            w="95%"
            h="500px"
            mx="auto"
            mt={6}
            borderRadius={10}
        >
            <Charts
                options={chartData.options}
                series={chartData.series}
                type="line"
                width="100%"
                height="100%"
            />
        </Box>
    );
};

export default BarChart;
