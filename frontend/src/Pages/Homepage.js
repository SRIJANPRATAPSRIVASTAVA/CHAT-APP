import React from "react";
import {
  Container,
  Box,
  Text,
  TabList,
  TabPanel,
  Tabs,
  Tab,
  TabPanels,
} from "@chakra-ui/react";
import "../App.css";
import SignUp from "../Components/Authentication/SignUp";
import Login from "../Components/Authentication/Login";

const Homepage = () => {
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        alignItems={"center"}
        p={3}
        bg={"white"}
        w="100%"
        m={"15px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"2xl"} fontFamily={"monospace"} textAlign={"center"}>
          MESSANGER
        </Text>
      </Box>

      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        color={"black"}
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
