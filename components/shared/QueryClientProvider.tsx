"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

import { PropsWithChildren } from "react";

const QueryclientProvider = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryclientProvider;
