import {openDatabase} from 'react-native-sqlite-storage';
import Item from './Item.js';

var db = openDatabase({name: 'ItemDatabase.db'});
var tableName = 'ITEMS';

export const init = () => {
  promise = new Promise((res, rej) => {
    db.transaction(tx => {
        //tx.executeSql(`DROP TABLE IF EXISTS ${tableName}`, []);
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${tableName} (ID INTEGER NOT NULL PRIMARY KEY, ITEM TEXT NOT NULL, ARCHIVED INTEGER NOT NULL);`,
          [],
        );
        console.log('Database initialized.');
      });
      res();
      rej();
  });
  return promise;
};

export const addItemToDatabase = (id, item, isArchived) => {
  db.executeSql(`INSERT INTO ${tableName} (ID, ITEM, ARCHIVED) VALUES(?,?,?)`, [
    id,
    item,
    isArchived,
  ]);
  console.log(
    `${item} with ID ${id} has been added to the database. isArchived: ${isArchived}`,
  );
};

export const archiveItemToDatabase = (id, item, isArchived) => {
  db.executeSql(`UPDATE ${tableName} SET ARCHIVED=? WHERE ID=?;`, [
    isArchived,
    id,
  ]);
  console.log(
    `Item name: ${item} with the ID: ${id} was archived in the database. isArchived: ${isArchived}`,
  );
};

export const deleteItemFromDatabase = (id, item) => {
  db.executeSql(`DELETE FROM ${tableName} WHERE ITEM=? AND ID=? `, [item, id]);
  console.log(
    `Item name: ${item} with the ID: ${id} was deleted from the database.`,
  );
};

export const fetchAllItems = () => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM ITEMS', [], (tx, results) => {
      console.log('Query completed');
      let len = results.rows.length;
      console.log(len);
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
        let item = new Item(row['id'], row['ITEM'], row['isArchived']);
        console.log(item);
      }
    });
  });
};
