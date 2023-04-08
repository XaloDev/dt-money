import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width={'50%'}>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    R$ {Number(transaction.price).toLocaleString('pt-BR')}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Date(transaction.createdAt).toLocaleDateString('pt-BR')}
                </td>
              </tr>
            )
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
