/**
 * Abstract base class for a repository that provides basic CRUD operations.
 * This class should be extended by specific repository implementations.
 *
 * @template T - The type of the entity that the repository will manage.
 */
import {IRead} from './interfaces/iread';
import {IWrite} from './interfaces/iwrite';


export default abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
    public abstract create(item: T): Promise<T>;
    public abstract update(id: string, item: T): Promise<T>;
    public abstract delete(id: string): Promise<T>;
    public abstract findOneByField(field: string, item: T): Promise<T[]>;
    public abstract findOneById(id: string): Promise<T>;
    public abstract findMany(field: string[], limit: number, offset: number): Promise<T[]>;
    public abstract findAll(item: T): Promise<T[]>;
}