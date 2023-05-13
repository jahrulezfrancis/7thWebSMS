import { Box } from "@chakra-ui/react";
import { SideBar } from "./Sidebar";
import DashboardComponent from "./Sections/dashboardComponent";

export default function DashboardLayout() {
    return (
        <Box>
            <SideBar />
            <DashboardComponent />
        </Box>
    )
}