import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
//   SimpleGrid,
//   Text,
//   Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

const SocialButton = ({
  children,
  label,
  href,
  target,
}: {
  children: ReactNode;
  label: string;
  href: string;
  target: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={target}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      backgroundColor='orange'>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/f%C3%ADlip-anselmo-04b651152/'} target="_blank">
              <FaLinkedin/>
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/filipanselmo11'} target="_blank">
              <FaGithub/>
            </SocialButton>
            <SocialButton label={'Gmail'} href={'#'} target="_blank">
              <h1>Gmail</h1>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
