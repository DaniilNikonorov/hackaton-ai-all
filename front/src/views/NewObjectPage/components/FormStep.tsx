import React, {useEffect, useState} from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading, Input,
  Select,
  Text, Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import {Step} from "../../../mockData/mockFormJson";
import {sendNewForm} from "../../../methods/sendNewForm";
import {FormAnswers} from "../../../contexts/FormContextProvider";
interface FormStepProps {
  stepNumber: number,
  stepOptions: {
    // @ts-ignore
    setStepNumber: (callback) => void,
    stepsCount: number
  },
  step: Step,
  formAnswers: FormAnswers,
  setFormAnswers: any
}

function FormStep(props: FormStepProps) {
  const {stepOptions: { setStepNumber, stepsCount}, stepNumber, step, formAnswers, setFormAnswers } = props
  const [typeValue, setTypeValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [sumValue, setSumValue] = useState('');

  // useEffect(() => {
  //   const listener = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //     if(e.key == 'ArrowRight' || e.key == 'Enter'){
  //       goToNextStep()
  //     }else if(e.key == 'ArrowLeft'){
  //       goToPrevStep()
  //     }
  //   }
  //   //@ts-ignore
  //   document.addEventListener('keydown', listener)
  //   return () => {
  //     //@ts-ignore
  //     document.removeEventListener('keydown', listener)
  //   }
  // }, []);

  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const sendForm = () => {
    const message = `${typeValue}. По адресу ${addressValue}. Сумма ${sumValue} ₽`
    sendNewForm(message)
    setStepNumber(2)
  }

  // function goToNextStep()  {
  //     setStepNumber((step: number) => step + 1)
  // }
  // function goToPrevStep() {
  //   if(+step.id > 1){
  //     setStepNumber((step: number) => step - 1)
  //   }
  // }

  // const onChangeHandler = (value: string, i: number) => {
  //   setFormAnswers({...formAnswers, [step.questions[i].value]: value})
  // }

  return (
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto" }}
        me='auto'
        mt='40px'
        h='100%'
        alignItems='center'
        justifyContent='center'
        // mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        // mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='36px'>
            Заполните поля
          </Heading>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <FormControl>
            <FormControl>
              <FormLabel
                  display='flex'
                  ms='4px'
                  fontSize='sm'
                  fontWeight='500'
                  color={textColor}
                  mb='8px'>
                Выберите вид инвестиции
                <Text color={brandStars}> *</Text>
              </FormLabel>
              <Select placeholder='Вид инвестиции..'
                      isRequired={true}
                      variant='auth'
                      fontSize='sm'
                      ms={{ base: "0px", md: "0px" }}
                      resize='none'
                      mb='24px'
                      fontWeight='500'
                      size='lg'
                      value={typeValue}
                      onChange={(e) => setTypeValue(e.target.value)}>
                <option>Капитальное строитесльство</option>
                <option>Капитальный ремонт</option>
                <option>Текущий ремонт</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel
                  display='flex'
                  ms='4px'
                  fontSize='sm'
                  fontWeight='500'
                  color={textColor}
                  mb='8px'>
                Выберите адрес
                <Text color={brandStars}> *</Text>
              </FormLabel>
              <Select
                  placeholder='адрес..'
                  isRequired={true}
                  variant='auth'
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  resize='none'
                  mb='24px'
                  fontWeight='500'
                  size='lg'
                  value={addressValue}
                  onChange={(e) => setAddressValue(e.target.value)}>
                <option>Кировский район, улица Цымбалюка, 1</option>
                <option>Проспект Карла Маркса, 29/2</option>
                <option>Ул. Воронежская, д. 154</option>
                <option>Переулок Святителя Иннокентия, 17</option>
                <option>улица Муравьёва-Амурского, 42</option>
              </Select>
            </FormControl>
            {/*{step.questions && step.questions.map((question, index) => {*/}
            {/*  return (*/}
                  <div>
                    <FormLabel
                      display='flex'
                      ms='4px'
                      fontSize='sm'
                      fontWeight='500'
                      color={textColor}
                      mb='8px'>
                      Введите cумму
                      <Text color={brandStars}> *</Text>
              </FormLabel>
                <Input
                    isRequired={true}
                    variant='auth'
                    fontSize='sm'
                    ms={{ base: "0px", md: "0px" }}
                    resize='none'
                    // type='text'
                    placeholder="сумма.."
                    mb='24px'
                    fontWeight='500'
                    size='lg'
                    value={sumValue}
                    onChange={(e) => setSumValue(e.target.value)}
                />
              </div>

            {/*  )*/}
            {/*})}*/}

            <Flex justifyContent='space-between' align='center' mb='24px'>
            </Flex>
            <Flex
            justifyContent='space-between'
            >
              {/*{stepNumber > 1 ? <Button*/}
              {/*    variant='lightBrand'*/}
              {/*    fontSize='sm'*/}
              {/*    fontWeight='500'*/}
              {/*    w='48%'*/}
              {/*    h='50'*/}
              {/*    mb='24px'*/}
              {/*    onClick={goToPrevStep}*/}
              {/*>*/}
              {/*  Назад*/}
              {/*</Button> : null}*/}
              <Button
                  type='submit'
                  fontSize='sm'
                  variant='brand'
                  fontWeight='500'
                  w='100%'
                  h='50'
                  mb='24px'
                  onClick={sendForm}
              >
                Отправить
              </Button>
            </Flex>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'>
          </Flex>
        </Flex>
      </Flex>
  );
}

export default FormStep;
