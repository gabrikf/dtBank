import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

type TransactionsType = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}
type TransactionsContextValue = {
    transactions: TransactionsType[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}
type TransactionInput = Omit<TransactionsType, 'id' | 'createdAt'> // Pick<Transaction, 'title' | 'amount'> do the opposite

type TransactionsProviderProps = {
    children: ReactNode;
}
const TransactionsContext = createContext<TransactionsContextValue>({} as TransactionsContextValue);


export function TransactionProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsType[]>([])
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
        
    },[])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('transactions', transactionInput)
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            {...transaction, createdAt: new Date()}
        ])
    }
   return (
       <TransactionsContext.Provider value={{transactions, createTransaction }}>
           {children}
       </TransactionsContext.Provider>
       
   )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}

