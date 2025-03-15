import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';
import styles from './GraphiQLEditor.module.css';

const fetcher = async (graphQLParams: any) => {
  const apiURL = import.meta.env.VITE_API_URL;
  const apiToken = import.meta.env.VITE_API_TOKEN;
  console.log(apiURL)
  console.log(apiToken)
  const response = await fetch(
    apiURL,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
      body: JSON.stringify(graphQLParams),
      credentials: 'same-origin',
    },
  );
  return response.json();
};

export const GraphiQLEditor = () => <GraphiQL fetcher={fetcher} className={styles.root} />;
