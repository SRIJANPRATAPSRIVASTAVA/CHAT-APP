import { React, useState, useEffect, useHistory } from "react";
import {
  FormLabel,
  FormControl,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import "@chakra-ui/react";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [profilepic, setprofilepic] = useState();
  const [password, setpassword] = useState();
  const [consfirmpassword, setconsfirmpassword] = useState();
  const [showpassword, setshowpassword] = useState(false);

  const postDetails = (pic) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl id="firstName" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></Input>
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></Input>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showpassword ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <InputRightElement width="4.5em">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => {
                setshowpassword(!showpassword);
              }}
            >
              {showpassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="cnfrmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={showpassword ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <InputRightElement width="4.5em">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => {
                setshowpassword(!showpassword);
              }}
            >
              {showpassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload Your Picture</FormLabel>
        <Input
          type={"file"}
          p={1.5}
          accept={"image/"}
          onChange={(e) => postDetails(e.target.files[0])}
        ></Input>
      </FormControl>

      <Button
        colorScheme={"blue"}
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        SignUp
      </Button>
    </VStack>
  );
};

export default SignUp;
