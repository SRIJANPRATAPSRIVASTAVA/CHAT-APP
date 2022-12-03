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
  const [email, setemail] = useState("");
  const [password, setpassword] = useState();
  const [showpassword, setshowpassword] = useState(false);

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
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
      <Button
        colorScheme={"blue"}
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
      <Button
      variant={'solid'}
        colorScheme={"red"}
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={()=>{
            setemail('guest@example.com')
            setpassword('123456');
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default SignUp;
