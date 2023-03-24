import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "./Sidebar";

export default function Dashboard() {
    return (
        <Box>
            <Flex>
                <SideBar />
            </Flex>
        </Box>
    )
}