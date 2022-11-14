import { SummaryCard, SummaryContainer } from './styled';
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import { priceFormatter } from '../../utils/formatter';
import { useSumary } from '../../hooks/useSumary';

export const Sumary = () => {
  const sumary = useSumary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(sumary.incomes)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(sumary.outcomes)}</strong>
      </SummaryCard>

      <SummaryCard variant={sumary.total > 0 ? 'green' : 'red'}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>{priceFormatter.format(sumary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
