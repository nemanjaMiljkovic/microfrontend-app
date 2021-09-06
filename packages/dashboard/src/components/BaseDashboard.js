import { Badge, Box, Grid, Heading, IconButton, Text } from "@chakra-ui/react";
import { DragHandleIcon, CalendarIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";
import axios from "axios";
import { store } from "store/Store";
import { useEffect } from "react";
import { navigateToUrl } from "single-spa";

export function BaseDashboard() {
  const { data } = useQuery(
    "products",
    () => axios.get("https://6125323a3c91fb0017e729ce.mockapi.io/products"),
    {
      onSuccess(data) {
        store.dispatch({ type: "products", payload: data.data });
      },
    }
  );

  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
    });
  }, []);

  const navigateToProducts = () => {
    navigateToUrl("/products");
  };

  return (
    <Box>
      <Box p={4} bg="purple.600">
        <Box d="flex" justifyContent="flex-end">
          <IconButton
            mr={4}
            aria-label="Search database"
            icon={<DragHandleIcon />}
            onClick={navigateToProducts}
          />
          <IconButton aria-label="Search database" icon={<CalendarIcon />} />
        </Box>
      </Box>
      <Box p={4}>
        <Heading mb={8}>Dashboard</Heading>

        <Grid templateColumns="repeat(auto-fit, minmax(20rem, 1fr))" gap={6}>
          {data
            ? data.data.map((p) => (
                <Box
                  key={p.id}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  bg="white"
                >
                  <Box p="6">
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      <Text color="gray.600">{p.name}</Text>
                    </Box>

                    <Box mb={4}>
                      <Text color="gray.600">{p.department}</Text>
                    </Box>
                    <Box d="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        <Text color="gray.600">{p.description}</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))
            : null}
        </Grid>
      </Box>
    </Box>
  );
}
