import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Components/Authentication/SignIn";
import Dashboard from "./Components/Dashboard/dashboard";
import { Student } from "./Components/Dashboard/Sections/Student";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="student" element={<Student />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
