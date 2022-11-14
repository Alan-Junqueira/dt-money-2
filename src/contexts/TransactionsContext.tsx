import { createContext, ReactNode, useEffect, useState } from 'react';

export interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface ITransactonsContext {
  transactions: ITransaction[];
}

export const TransactionsContext = createContext({} as ITransactonsContext);

interface ITransactionsProvider {
  children: ReactNode;
}

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    // GET /transactions
    (async function () {
      const response = await fetch('http://localhost:3333/transactions');
      const data = await response.json();
      setTransactions(data);
    })();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
