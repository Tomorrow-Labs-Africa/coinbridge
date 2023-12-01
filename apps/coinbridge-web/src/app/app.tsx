// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Airtime from './Views/Airtime';
import Menu from './Views/Menu';
import OffRamp from './Views/OffRamp';
import OnRamp from './Views/OnRamp';
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
        {/* <OnRamp /> */}
        {/* <Menu /> */}
      

        {/* <NxWelcome title="coinbridge-web" /> */}
      </div>
    </QueryClientProvider>

  );
}

export default App;
