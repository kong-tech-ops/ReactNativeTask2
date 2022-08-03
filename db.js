import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'ItemDatabase.db' });
var tableName = "items";

export const init = () => {
        db.transaction((tx) => {
            //tx.executeSql('DROP TABLE IF EXISTS ITEMS', []);
            tx.executeSql(`CREATE TABLE IF NOT EXISTS ${tableName} (ID INTEGER NOT NULL PRIMARY KEY, ITEM TEXT NOT NULL, ARCHIVED INTEGER NOT NULL);`, []);
            console.log('Database initialized.');
        }
    );
};

export const addItemToDatabase = (anID, item, isArchived) => {
    db.executeSql(`INSERT INTO ${tableName} (ITEM, ARCHIVED) VALUES(?,?,?)`, [anID, item, isArchived]);
    console.log(`${item} with ID ${anID} has been added to the database. isArchived: ${isArchived}`);
}

export const archiveItemToDatabase = (anID, item, isArchived) => {
    db.executeSql(`UPDATE ${tableName} SET ARCHIVED=? WHERE ID=?;`, [item, anID, isArchived]);
    console.log(`Item name: ${item} with the ID: ${anID} was archived in the database. isArchived: ${isArchived}`);
}

export const deleteItemFromDatabase = (anID, item) => {
    db.executeSql(`DELETE FROM ${tableName} ITEM=? AND WHERE ID=? `, [item, anID]);
    console.log(`Item name: ${item} with the ID: ${anID} was deleted from the database.`);
}

export const fetchAllItems = () => {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM ITEMS', [], (tx, results) => {
                    console.log("Query completed");
                    let len = results.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        console.log(row);
                    }
                }
            );      
        }
    );
};