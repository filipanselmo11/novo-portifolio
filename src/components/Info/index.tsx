import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    ModalCloseButton,
    useDisclosure,
    AbsoluteCenter,
    Box,
} from '@chakra-ui/react'
const Info = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box position={'relative'} h='100px'>
                <AbsoluteCenter p='4'>
                    <Button onClick={onOpen} colorScheme='blue'>Sobre</Button>
                </AbsoluteCenter>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Olá, meu nome é Fílip Anselmo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Como vai ? Espero que esteja tudo bem. Deixa eu me apresentar direito, meu nome é Fílip Anselmo Alves da Silva.
                        Tenho 26 anos de idade, sou natural de São Gabriel da Cachoeira, uma cidade que fica no extremo norte do estado do Amazonas.
                        Sou formado em Sistemas de Informação pela Escola Superior de Tecnologia da UEA.
                        Sou dev há 1 ano, já estudei e tive interesse em algumas áreas, mas atualmente estou focado no Front End.
                        Esse projeto é uma atualização de um outro portifólio que fiz na época que estava na faculdade.
                        Este novo portifólio, funciona como uma espécie de vitrine que aplicações front end que eu fiz.
                        Algumas aplicações foram me baseando em conteúdo de cursos que eu fiz, outras foram ideias que tive da minha cabeça 
                        afim de melhorar minhas habilidades como dev.
                        Ultimamente venho estudando tecnlogias back-end como Node e Python, afim de aumentar meu leque de habilidades para novas
                        oportunidades.
                        Bom, eu acho que é isso. Obrigado pela visita. Estou aberto a sugestões caso tenha.
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Fechar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Info;