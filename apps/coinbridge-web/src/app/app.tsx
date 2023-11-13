// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Airtime from './Views/Airtime';
import OffRamp from './Views/OffRamp';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { QueryClient, QueryClientProvider } from "react-query";

export function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <Airtime/> */}
        <OffRamp/>

        {/* <NxWelcome title="coinbridge-web" /> */}
      </div>
    </QueryClientProvider>

  );
}

export default App;
