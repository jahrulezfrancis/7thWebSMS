import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, Divider, Box, VStack, Stack, Image, Icon, Spacer } from "@chakra-ui/react";
import React from "react";
import HeaderLogo from "../../Assets/Images/small-header-logo.svg"
import {CgMenuGridR} from "react-icons/cg" 

export function SideBar() {
    function SideBarButton({ title }) {
        return (
            <div>
                <Button background="none" color="white" _hover="none" _active="none">{title}</Button>
            </div>
        )
    }
    return (
        <Box>
            <Stack align="center" p={5} direction="row" w="100%" background="#D60A0B" h="99px">
                <Image w="53px" src={HeaderLogo} alt="header logo" />
                <Spacer />
                <Icon color="white" fontSize="38px" as={CgMenuGridR} />
            </Stack>
            <VStack spacing="15px" align="start" w="17.875rem" minH="100vh" h="100%" p="20px" background="#14238A">
                <Button background="none" color="white" _hover="none" _active="none">Dashboard</Button>
                <Divider border="2px solid #131F73" />
                <Accordion allowToggle w="100%" sx={{ border: "transparent" }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _hover="none">
                                <Box as="span" flex='1' textAlign='left'>
                                    <SideBarButton title="Sudents" />
                                </Box>
                                <AccordionIcon color="white" />
                            </AccordionButton>
                        </h2>
                        <VStack align="start">
                            <AccordionPanel pb={1}>
                                <SideBarButton title="All Students" />
                            </AccordionPanel>
                            <AccordionPanel pb={1}>
                                <SideBarButton title="Add Students" />
                            </AccordionPanel>
                            <AccordionPanel pb={1}>
                                <SideBarButton title="Students Promotion" />
                            </AccordionPanel>
                        </VStack>
                    </AccordionItem>
                </Accordion>
                <Divider border="2px solid #131F73" />
                <Button background="none" color="white" _hover="none" _active="none">Parents</Button>
                <Divider border="2px solid #131F73" />
                <Accordion allowToggle w="100%" sx={{ border: "transparent" }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton paddingLeft="-100px" _hover="none">
                                <Box as="span" flex='1' textAlign='left'>
                                    <SideBarButton title="Teachers" />
                                </Box>
                                <AccordionIcon color="white" />
                            </AccordionButton>
                        </h2>
                        <VStack align="start" justify="center">
                            <AccordionPanel pb={1}>
                                <SideBarButton title="All Teachers" />
                            </AccordionPanel>
                            <AccordionPanel pb={1}>
                                <SideBarButton title="Add Teachers" />
                            </AccordionPanel>
                        </VStack>
                    </AccordionItem>
                </Accordion>
                <Divider border="2px solid #131F73" />
                <Accordion allowToggle w="100%" sx={{ border: "transparent" }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton paddingLeft="-100px" _hover="none">
                                <Box as="span" flex='1' textAlign='left'>
                                    <SideBarButton title="Account" />
                                </Box>
                                <AccordionIcon color="white" />
                            </AccordionButton>
                        </h2>
                        <VStack align="start" justify="center">
                            <AccordionPanel pb={1}>
                                <SideBarButton title="Fees Group" />
                            </AccordionPanel>
                            <AccordionPanel pb={1}>
                                <SideBarButton title="Student Fees" />
                            </AccordionPanel>
                            <AccordionPanel pb={1}>
                                <SideBarButton title="Expenses" />
                            </AccordionPanel>
                            <AccordionPanel pb={1}>
                                <SideBarButton title="Add Expenses" />
                            </AccordionPanel>
                        </VStack>
                    </AccordionItem>
                </Accordion>
                <Divider border="2px solid #131F73" />
                <Button background="none" color="white" _hover="none" _active="none">Subject</Button>
                <Divider border="2px solid #131F73" />
                <Button background="none" color="white" _hover="none" _active="none">Settings</Button>
                <Divider border="2px solid #131F73" />
            </VStack>
        </Box>
    )
}