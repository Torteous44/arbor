"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { WaitingListModal } from "@/components/ui";

interface WaitingListContextType {
  isWaitingListOpen: boolean;
  openWaitingList: () => void;
  closeWaitingList: () => void;
}

const WaitingListContext = createContext<WaitingListContextType | undefined>(undefined);

export const useWaitingList = () => {
  const context = useContext(WaitingListContext);
  if (!context) {
    throw new Error("useWaitingList must be used within a WaitingListProvider");
  }
  return context;
};

interface WaitingListProviderProps {
  children: ReactNode;
}

export const WaitingListProvider = ({ children }: WaitingListProviderProps) => {
  const [isWaitingListOpen, setIsWaitingListOpen] = useState(false);

  const openWaitingList = () => setIsWaitingListOpen(true);
  const closeWaitingList = () => setIsWaitingListOpen(false);

  return (
    <WaitingListContext.Provider value={{ isWaitingListOpen, openWaitingList, closeWaitingList }}>
      {children}
      <WaitingListModal isOpen={isWaitingListOpen} onClose={closeWaitingList} />
    </WaitingListContext.Provider>
  );
};