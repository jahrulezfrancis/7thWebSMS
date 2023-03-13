import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Components/Authentication/SignIn";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Box>
  );
}

export default App;
