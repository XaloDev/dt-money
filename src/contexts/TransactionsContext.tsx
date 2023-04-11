import { createContext, ReactNode, useState, useEffect } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface ITransactionsContext {
  transactions: Transaction[]
}

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext,
)

interface TransactionContextProviderProps {
  children: ReactNode
}

export function TransactionsContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await api.get('/transactions')
    setTransactions(response.data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
