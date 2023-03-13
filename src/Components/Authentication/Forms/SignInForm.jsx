import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInForm() {
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
        console.log(userDetails);
    }

    const handleSubmit = (e) => {
        console.log("Your data has been submitted successfully")
        e.preventDefault()
    }


    return (
        <Box display="flex" alignItems="center" justifyContent="center" borderRadius="15px" background="white" w="406px" h="372px">
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input name="Username" onChange={handleChange} style={InputStyle} type="text" />
                </FormControl>
                <FormControl isRequired mt="20px">
                    <FormLabel>Password</FormLabel>
                    <Input name="Password" onChange={handleChange} style={InputStyle} type="password" />
                </FormControl>
                <Link to="/" >
                    <Text color="#14238A" textDecor="underline">Forgot Password?</Text>

                </Link>
                <Button type="submit" mt="20px" _hover="none" color="white" bg="#D60A0B" style={InputStyle}>SIGN IN</Button>
            </form>
        </Box>
    )
}

const InputStyle = {
    width: "348px",
    height: "45px",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.26)",
    // marginTop: "8px",
}