import { Icon, Box, Divider, HStack, Heading, Stack, Text } from "@chakra-ui/react";

export default function HeaderCard(props) {
    const { icon, Title, Quantity } = props
    return (
        <Box>
            <HStack sx={BoxStyle} w="260px">
                {<Icon fontSize="74px" as={icon} />}
                <Divider h="40px" border="1px solid #D60A0B" orientation="vertical" />
                <Stack>
                    <Text>{Title}</Text>
                    <Heading>{Quantity}</Heading>
                </Stack>
            </HStack>
        </Box>
    )
}

const BoxStyle = {
    background: "#FFFFFF",
    boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    padding: "17px",
    gap: "19px"
}