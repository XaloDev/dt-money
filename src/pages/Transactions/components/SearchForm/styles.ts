import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 4rem;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition: background-color 0.2s, color 0.2seg, border-color 0.2s;
      cursor: pointer;
    }
  }
`
