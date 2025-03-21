
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

import { Toaster } from "../components/ui/toaster";
import { ReactNode } from "react";


export function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
      < Toaster />
    </ChakraProvider >
  );
}
