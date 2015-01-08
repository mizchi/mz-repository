type Id = string;

declare class Repository {
  export interface Thenable<R> {
    then<U>(onFulfilled?: (value: R) => Thenable<U>,  onRejected?: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => Thenable<U>, onRejected?: (error: any) => U): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => void): Thenable<U>;
  }

  declare class Database {
    getCollection<T>(name: string): Collection<T>;
  }

  declare class Collection<T> {
    find(id: ID): Thenable<T>;
    findById(id: ID): Thenable<T>;
    where(query: any): Thenable<T[]>;
    findOne(query: any): Thenable<T>;

    save(t: T): Thenable<T>;
    remove(id: ID): Thenable<any>;
  }
}
