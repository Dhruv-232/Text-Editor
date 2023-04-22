import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('putting to the database');
  const jateDb = await openDB('jate', 1);
  const txn = jateDb.transaction('jate', 'readwrite');
  const dbStore = txn.objectStore('jate');
  const dbReq = dbStore.put({ id: 1, value: content });
  const res = await dbReq;
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
  const txn = jateDb.transaction('jate', 'readonly');
  const dbStore = txn.objectStore('jate');
  const dbReq = dbStore.get(1);
  const res = await request;

  return res?.value;
}

initdb();
