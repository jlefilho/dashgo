import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";


function formatDateDayMonth(date: Date) {
    const [first, ...rest] = date.toLocaleString('pt-BR', { month: "short" }).split('')
  
    return date.getDay().toString().padStart(2, '0') + ' ' + first.toUpperCase() + rest.slice(0, -1).join('')
}

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})


const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    toolTip: {
        enabled: false
    },
    xaxis: {
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            show: true,
            color: theme.colors.gray[600]
        },
        categories: [
            formatDateDayMonth(new Date("2022-12-10T00:00:00.000Z")),
            formatDateDayMonth(new Date("2022-12-11T00:00:00.000Z")),
            formatDateDayMonth(new Date("2022-12-12T00:00:00.000Z")),
            formatDateDayMonth(new Date("2022-12-13T00:00:00.000Z")),
            formatDateDayMonth(new Date("2022-12-14T00:00:00.000Z")),
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}

const series = [
    {
        name: 'series1',
        data: [12, 10, 28, 51, 32]
    }
]

export default function Dashboard() {
    return (
        <Flex direction='column' h='100vh'>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <SimpleGrid
                    flex='1'
                    gap='4'
                    minChildWidth='320px'
                    alignItems='flex-start'
                >
                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                       <Text fontSize='large' mb='4'>Inscritos da Semana</Text>
                       <Chart
                        options={options}
                        series={series}
                        type='area'
                        height={160}
                       />
                    </Box>

                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                       <Text fontSize='large' mb='4'>Taxa de Abertura</Text> 
                       <Chart
                        options={options}
                        series={series}
                        type='area'
                        height={160}
                       />
                    </Box>

                    
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}