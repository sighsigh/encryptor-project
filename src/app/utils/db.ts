import { Store, set, get } from "idb-keyval";

const DB_NAME = "encryptor-db";
const STORE_NAME = "encrypted-files";

class DB {
  dbName: string;
  storeName: string;
  store: any;

  constructor(dbName: string, storeName: string) {
    this.dbName = dbName;
    this.storeName = storeName;
    this.store = new Store(this.dbName, this.storeName);
  }

  getById(id: string): Promise<any> {
    return get(id, this.store);
  }

  save(key: string, val: any): Promise<any> {
    return set(key, val, this.store);
  }
}

export const db = new DB(DB_NAME, STORE_NAME);
