import { Box, VStack, Button, Text, useMediaQuery } from "@chakra-ui/react"

export default function ReminderCard(props) {
    const [isMobileDevice] = useMediaQuery('(max-width: 650px)')
    const { date, message } = props;
    return (
        <Box>
            <VStack align="start">
                <Button color="white" fontWeigth="500" fontSize="14px" borderRadius={"20px"} w={isMobileDevice ? "auto" : "120px"} h="34px" bg="#FBD540">
                    {date}
                </Button>
                <Text display="flex" wordBreak="normal">
                    {/* {message} */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati laboriosam voluptate nihil sapiente! Autem temporibus esse quas adipisci quo magni accusamus dicta praesentium! Nesciunt delectus expedita nam? Non, neque reprehenderit.
                </Text>
            </VStack>
        </Box>
    )
}