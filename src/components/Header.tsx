import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1480}
            h='20'
            mx='auto'
            mt='4'
            px='6'
            align='center'
        >
            
            <Text
                fontSize='3xl'
                fontWeight='bold'
                letterSpacing='tight'
                w='64'
            >
                dashgo
                <Text as='span' color='pink.500' ml='1'>.</Text>
            </Text>

            {/* SEARCH BOX */}
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
                />

                <Icon as={RiSearchLine} fontSize='20' />

            </Flex>

            <Flex
                align='center'
                ml='auto'
            >
                {/* ICONS */}
                <HStack
                    spacing='8'
                    color='gray.300'
                    borderRightWidth={1}
                    borderColor='gray.700'
                    mx='8'
                    pr='8'
                    py='1'
                >
                    <Icon as={RiNotificationLine} fontSize='20' />
                    <Icon as={RiUserAddLine} fontSize='20' />
                </HStack>

                {/* PROFILE */}
                <Flex align='center'>
                    <Box
                        textAlign='right'
                        mr='4'
                    >
                        <Text>Jorge Espindola</Text>
                        <Text
                            color='gray.300'
                            fontSize='small'
                        >
                            jlespindolaf@gmail.com
                        </Text>
                    </Box>

                    <Avatar
                        size='md'
                        name='Jorge Espindola'
                        src='https://github.com/jlefilho.png'
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}