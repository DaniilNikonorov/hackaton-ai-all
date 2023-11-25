import React, {useContext, useState} from "react";
import {
  Flex,
} from "@chakra-ui/react";
import {formJson} from "../../../mockData/mockFormJson";
import FormStep from "./FormStep";
import { FormContext } from "contexts/FormContext";

function Form() {
  const [stepNumber, setStepNumber] = useState<number>(1);

  const {formAnswers, setFormAnswers} = useContext(FormContext)

  const stepsCount = formJson.content.length
  return (
      <Flex
        maxW={{ base: "100%" }}
        w='100%'
        mx={{ base: "auto" }}
        me='auto'
        mt='50px'
        h='100%'
        alignItems='center'
        justifyContent='center'
        px={{ base: "25px", md: "0px" }}
        flexDirection='column'>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
            {<FormStep stepNumber={stepNumber} stepOptions={{setStepNumber, stepsCount}} step={formJson.content[stepNumber - 1]} formAnswers={formAnswers} setFormAnswers={setFormAnswers} />}
        </Flex>
      </Flex>
  );
}

export default Form;
