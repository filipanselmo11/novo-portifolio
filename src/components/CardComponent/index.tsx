import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Divider,
  CardFooter,
  Button,
  HStack
} from "@chakra-ui/react";
import { IInfoPortifolio } from "../../interfaces/IInfoPortifolio";

const CardComponent = ({ nomeAplicacao, imagem, linkApp, descricao, repositorio }: IInfoPortifolio) => {
  return (
    <Card maxW="sm" alignItems='center' textAlign='center' backgroundColor='orange'>
      <CardBody>
        <Image
          src={imagem}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>
            {nomeAplicacao}
          </Heading>
          <Text>
            {descricao}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack spacing='24px'>
          <Button variant='solid' colorScheme="blue">
            <a href={linkApp} target='_blank'>
              Acessar
            </a>
          </Button>
          <Button variant='solid' colorScheme="blue">
            <a href={repositorio} target='_blank'>
              Repositório
            </a>
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
