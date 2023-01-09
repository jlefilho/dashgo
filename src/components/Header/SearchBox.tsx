import { useRef } from "react";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";


export function SearchBox() {
    const searchInputRef = useRef<HTMLInputElement>(null)

    return (
        <Flex
            as='label'
            position='relative'
            flex='1'
            color='gray.200'
            bg='gray.800'
            maxWidth={400}
            py='4'
            px='8'
            ml='6'
            borderRadius='full'
            alignSelf='center'
        >
            <Input
                color='gray.50'
                variant='unstyled'
                px='4'
                mr='4'
                placeholder='Buscar na plataforma'
                _placeholder={{ color: 'gray.400' }}
                ref={searchInputRef} 
            />

            <Icon as={RiSearchLine} fontSize='20' />

        </Flex>
    )
}