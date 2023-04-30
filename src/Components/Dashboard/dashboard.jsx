import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "./Sidebar";
import DashboardComponent from "./Sections/dashboardComponent";

export default function Dashboard() {
    return (
        <Box background="#F0F1F3">
            <Flex gap="10px">
                <SideBar />
                <DashboardComponent />
            </Flex>
        </Box>
    )
}