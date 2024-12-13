import React from 'react';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  // NOTE: I’ve removed the state hook for `isMobileMenuOpen` because Radix’s Dialog manages its own internal state. We have specialized components (Dialog.Trigger and Dialog.Close) to handle opening and closing the menu.
  // It is also possible to use Radix’s Dialog component in a *controlled* fashion, using its `open` and `onOpenChange` props. This is sometimes useful if we want to be able to toggle the menu based on some unrelated user action (eg. completing a purchase, joining a newsletter). In this particular case, however, we don’t have any special requirements, so we can leave the Dialog component uncontrolled.
  return (
    <Dialog.Root>
      <header>
        <SuperHeader />
        <MainHeader>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <DesktopNav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </DesktopNav>

          <MobileActions>
            <ShoppingBagButton>
              <Icon id="shopping-bag" />
              <VisuallyHidden>Open cart</VisuallyHidden>
            </ShoppingBagButton>
            <UnstyledButton>
              <Icon id="search" />
              <VisuallyHidden>Search</VisuallyHidden>
            </UnstyledButton>
            <Dialog.Trigger asChild>
              <UnstyledButton>
                <Icon id="menu" />
                <VisuallyHidden>Open menu</VisuallyHidden>
              </UnstyledButton>
            </Dialog.Trigger>
          </MobileActions>

          <Filler />
        </MainHeader>

        <MobileMenu />
      </header>
    </Dialog.Root>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
