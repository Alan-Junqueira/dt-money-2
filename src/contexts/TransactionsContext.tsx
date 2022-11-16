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
  fetchTransactions: (query?: string) => Promise<void>;
}

export const TransactionsContext = createContext({} as ITransactonsContext);

interface ITransactionsProvider {
  children: ReactNode;
}

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions');

    if (query) {
      url.searchParams.append('q', query);
    }

    const response = await fetch(url);
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    // GET /transactions
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
