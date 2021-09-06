import { ChakraProvider } from "@chakra-ui/react";
import { BaseDashboard } from "./components/BaseDashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { store } from "store/Store";

const queryClient = new QueryClient();

const App = ({ isAuthenticated, navigateToUrl }) => {
  useEffect(() => {
    store.dispatch({ type: "authStatus", payload: isAuthenticated });
    if (!isAuthenticated) {
      navigateToUrl("/");
    }
  }, [isAuthenticated]);

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BaseDashboard navigateToUrl={navigateToUrl} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
