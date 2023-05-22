import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Divider,
  CardFooter,
  Button
} from "@chakra-ui/react";
import { IInfoPortifolio } from "../../interfaces/IInfoPortifolio";

const CardComponent = ({ nomeAplicacao, imagem, linkApp, descricao }: IInfoPortifolio) => {
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
      <Divider/>
      <CardFooter>
            <Button variant='solid' colorScheme="blue">
                <a href={linkApp} target='_blank'>
                    Acessar
                </a>
            </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
