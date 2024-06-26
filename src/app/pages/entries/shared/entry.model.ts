import { Category } from "../../categories/shared/category.model";

export class Entry {
    constructor(
        public id?: Number,
        public name?: string,
        public description?: string,
        public type?: string,
        public amount?: string,
        public date?: string,
        public paid?: boolean,
        public categoryId?: Number,
        public category?: Category[]
    ) { }

    static types = {
        expense: 'Despesa',
        revenue: 'Receita'
    }

    get paidText(): string {
        return this.paid ? 'Pago' : 'Pendente'
    }
}