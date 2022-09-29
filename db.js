import { openDatabase } from 'react-native-sqlite-storage';
import Item from './Item.js';

var db = openDatabase({ name: 'ItemDatabase.db' });
var tableName = 'ITEMS';

export const init = () => {
  promise = new Promise((res, rej) => {
    try {
      db.transaction(tx => {
        // tx.executeSql(`DROP TABLE IF EXISTS ${tableName}`, []);
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${tableName} (ID INTEGER NOT NULL PRIMARY KEY, ITEM TEXT NOT NULL, ARCHIVED INTEGER NOT NULL);`,
          [],
        );
      });
      res();
    } catch (error) {
      rej(error);
    }
  }
  );
  return promise;
};

export const addItemToDatabase = (item) => {
  promise = new Promise((res, rej) => {
    try {
      db.transaction(tx => {
        db.executeSql(`INSERT INTO ${tableName} (ITEM, ARCHIVED) VALUES(?, 0)`, [
          item,
        ]);
      });
    } catch (error) {
      rej(error);
    }
    res();
  });
  return promise;
};

export const archiveItemToDatabase = (id) => {
  db.executeSql(`UPDATE ${tableName} SET ARCHIVED = 1 WHERE ID = ?;`, [
    id
  ]);
  console.log(
    `Item with id: ${id} was archived in the database}`,
  );
};

export const deleteItemFromDatabase = (id) => {
  db.executeSql(`DELETE FROM ${tableName} WHERE ID = ? `, [id]);
  console.log(
    `Item with the ID: ${id} was deleted from the database.`,
  );
};

export const fetchAllItems = () => {
  promise = new Promise((res, rej) => {
    try {
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM ITEMS', [], (tx, results) => {
          console.log('Query completed');
          let len = results.rows.length;
          let items = [];
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            let item = new Item(row['ID'], row['ITEM'], row['ARCHIVED']);
            items.push(item);
          }
          res(items);
        });
      });
    } catch (error) {
      rej(error);
    }
  });
  return promise;
};
