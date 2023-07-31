import { Heading, Text } from "@chakra-ui/react"


const Header = () => {
    return (
        <Heading variant="custom" textAlign='center'>
            <Text fontSize='4xl' as='kbd'>
                Bem Vindo(a) !!
            </Text>
        </Heading>
    )
}

export default Header