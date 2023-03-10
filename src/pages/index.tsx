import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types/form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

interface UserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm<UserFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<UserFormData> = async (values: UserFormData) => {

    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input 
            label='E-mail'
            type='email'
            error={errors.email}
            {...register('email')} 
          />
          <Input 
            label='Senha'
            type='password'
            error={errors.password}
            {...register('password')}
          />          
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
