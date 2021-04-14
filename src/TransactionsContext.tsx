import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from "./services/api";

interface Transactions {
    id: number;
    title: string;
    type: string
    category: string
    amount: number;
    createdAt: string;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: Transactions[];
    createTransactions: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}



export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([]);


    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransactions(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })
        const { transaction } = response.data;

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )

}


