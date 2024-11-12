import { WithProviders } from '@app/providers';

import { Router } from './routes';

const App = () => (
  <WithProviders>
    <Router />
  </WithProviders>
);

export default App;
