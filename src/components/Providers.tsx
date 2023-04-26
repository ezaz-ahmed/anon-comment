"use clinet";

import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: ReactNode;
}

const Provider: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      {children}
    </>
  );
};

export default Provider;
