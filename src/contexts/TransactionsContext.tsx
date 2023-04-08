import { createContext, ReactNode, useState, useEffect } from 'react'

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
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    setTransactions(data)
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
