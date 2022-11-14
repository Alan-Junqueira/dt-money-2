import * as Dialog from '@radix-ui/react-dialog';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styled';

import logoImage from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
