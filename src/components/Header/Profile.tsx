import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align='center'>
            { showProfileData && (
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
            )}

            <Avatar
                size='md'
                name='Jorge Espindola'
                src='https://github.com/jlefilho.png'
            />
        </Flex>
    )
}