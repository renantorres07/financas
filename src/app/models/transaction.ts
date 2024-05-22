export interface Transaction {
    id?: string;
    userId: string;
    amount: number;
    type: string; // 'income' ou 'expense'
    description: string;
    date?: Date;
}