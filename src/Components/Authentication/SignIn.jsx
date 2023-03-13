import { Flex, Text, Image, HStack, Stack } from "@chakra-ui/react";
import SignInForm from "./Forms/SignInForm";
import BackgroundImage from "../../Assets/Images/background.svg"
import Logo from "../../Assets/Images/SchoolLogo.svg"

export function SignIn() {

    return (
        <Flex justify="center" align="center" minH="100vh" >
            <HStack background="#14238A" h="80vh" w="1020px" borderRadius="8px">
                {/* <Image h="auto" src={BackgroundImage} alt="background image" position="relative" /> */}
                <Stack borderRadius="8px 0px 0px 8px" justify="center" align="center" h="100%" w="526px" bgImage={BackgroundImage}>
                    <Image src={Logo} alt="logo" />
                    <Text mt="5" fontFamily="Poppins" fontWeight="700" fontSize="50px" lineHeight="32px" color="white">Welcome</Text>
                </Stack>
                <SignInForm />
            </HStack>
        </Flex>
    )
}