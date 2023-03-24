import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInForm() {
    const [isLoading, setisLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({
        Username: "",
        Password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        setisLoading(true)
        setTimeout(() => {
            Navigate("/dashboard")
        }, 3000);
        e.preventDefault()
    }


    return (
        <Box display="flex" alignItems="center" justifyContent="center" borderRadius=".9375rem" background="white" w="25.375rem" h="23.25rem">
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input name="Username" onChange={handleChange} style={InputStyle} type="text" />
                </FormControl>
                <FormControl isRequired mt="1.25rem">
                    <FormLabel>Password</FormLabel>
                    <Input name="Password" onChange={handleChange} style={InputStyle} type="password" />
                </FormControl>
                <Link to="/" >
                    <Text color="#14238A" textDecor="underline">Forgot Password?</Text>

                </Link>
                <Button isLoading={isLoading ? true : false} type="submit" mt="1.25rem" _hover="none" color="white" bg="#D60A0B" style={InputStyle}>SIGN IN</Button>
            </form>
        </Box>
    )
}

const InputStyle = {
    width: "21.75rem",
    height: "2.8125rem",
    borderRadius: ".5rem",
    border: ".0625rem solid rgba(0, 0, 0, 0.26)",
    // marginTop: ".5rem",
}