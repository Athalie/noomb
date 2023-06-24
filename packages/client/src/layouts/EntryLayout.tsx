import { Image, TextInput, Checkbox, Button, Group, Box, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { LogoLangBlock } from 'components/header/LogoLangBlock';
import loginImage from '../assets/images/login-image.svg';

const useStyles = createStyles({
  loginContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '100vh',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
    alignItems: 'flex-start',
  },
});

export const EntryLayout = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
      <div className={classes.loginContainer}>
        <div className={classes.form}>
          <LogoLangBlock />
          <Box maw={340} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />

              <Checkbox
                mt="md"
                label="I agree to sell my privacy"
                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
              />

              <Group mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </div>
        <Image src={loginImage} width="450px"></Image>
      </div>
    </>
  );
};
