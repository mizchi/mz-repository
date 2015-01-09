declare module Repository {
  type Id = string;
  export interface Thenable<R> {
    then<U>(onFulfilled?: (value: R) => Thenable<U>,  onRejected?: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => Thenable<U>, onRejected?: (error: any) => U): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => void): Thenable<U>;
  }

  export class Database {
    getCollection<T>(name: string): Collection<T>;
  }

  export class Collection<T> {
    find(id: Id): Thenable<T>;
    findById(id: Id): Thenable<T>;
    where(query: any): Thenable<T[]>;
    findOne(query: any): Thenable<T>;
    exists(id: Id): Thenable<boolean>;
    all(): Thenable<T[]>;
    save(t: T): Thenable<T>;
    save(ts: T[]): Thenable<T[]>;
    remove(id: Id): Thenable<any>;
    remove(ids: Id[]): Thenable<any>;
  }
}
