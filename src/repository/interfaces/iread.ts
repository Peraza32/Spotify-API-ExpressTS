export default interface IRead<T> {
    findOneByField(field:string, item: T): Promise<T[]>;
    findOneById(id: string): Promise<T>;
    findMany(field: string[],limit:number, offset:number ): Promise<T[]>;
    findAll(item:T): Promise<T[]>;
}