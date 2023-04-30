import { Avatar, Box, Divider, Heading, Icon, Input, InputGroup, InputLeftElement, Spacer, Stack, Text } from "@chakra-ui/react";
import { MdOutlineMail } from "react-icons/md"
import { BiSearch } from "react-icons/bi"
import { ReactComponent as NotificationIcon } from "../../../Assets/Images/notifications-none.svg"
import { ReactComponent as MailIcon } from "../../../Assets/Images/mail-icon.svg"
import { ReactComponent as StudentIcon } from "../../../Assets/Images/student-icon.svg"
import { ReactComponent as StaffIcon } from "../../../Assets/Images/teacher-icon.svg"
import { ReactComponent as PeopleIcon } from "../../../Assets/Images/two-pers-icon.svg"
import { ReactComponent as DollarIcon } from "../../../Assets/Images/dollar-icon.svg"
import UserAvatar from "../../../Assets/Images/user-avatar.svg"
import HeaderCard from "../Reusables/InfoCard";

export default function DashboardComponent() {
    return (
        <Box w="100%">
            <Stack spacing="15px" align="center" direction="row" p={10}>
                <InputGroup>
                    <InputLeftElement h="100%" children={<Icon as={BiSearch} />} />
                    <Input w="200px" h="42px" type="search" placeholder="search" border="1px solid rgb(164, 164, 194)" color="blue" outline="none" />
                </InputGroup>
                <Spacer />
                <Icon color="#D60A0B" fontWeight="700" fontSize="24px" as={MailIcon} />
                <Icon color="#D60A0B" fontSize="24px" as={NotificationIcon} />
                <Box h="24px">
                    <Divider border="2px solid #D60A0B" orientation="vertical" />
                </Box>
                <Avatar src={UserAvatar} />
            </Stack>
            <Heading>Admin Dashboard</Heading>
            <Divider border="2px solid #FB2F30" w="45px" />
            <Text>Home</Text>
            <Stack spacing="20px" direction="row">
                <HeaderCard icon={StudentIcon} Title="Students" Quantity="5000" />
                <HeaderCard icon={StaffIcon} Title="Teachers" Quantity="1500" />
                <HeaderCard icon={PeopleIcon} Title="Parents" Quantity="5000" />
                <HeaderCard icon={DollarIcon} Title="Earnings" Quantity="$20000" />
            </Stack>
        </Box>
    )
}