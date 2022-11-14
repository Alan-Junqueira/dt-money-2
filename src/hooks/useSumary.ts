import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export const useSumary = () => {
  const { transactions } = useContext(TransactionsContext);

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.incomes += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcomes += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0
    }
  );

  return sumary
}