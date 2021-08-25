import { ApolloProvider } from '@apollo/react-hooks';
import client from './services/client';
import { Typography, Container, makeStyles } from "@material-ui/core";
import RepositoryList from "./RepositoryList";

const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center'
  }
});

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Container maxWidth={'sm'}>
        <Typography variant={'h3'} className={classes.title}>Github Stargazers</Typography>
        <RepositoryList />
      </Container>
    </ApolloProvider>
  );
}

export default App;
