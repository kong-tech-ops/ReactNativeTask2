import { Alert } from 'react-native';
import { archiveItemToDatabase, deleteItemFromDatabase, fetchAllItems } from './db';

const CreateAlert = (id, list, addToList) => {

  const removeItemFromList = () => {
    addToList(list => list.filter((item) => item.id !== id));
  }

  Alert.alert(
    "Delete?",
    "Do you want to delete this item?",
    [
      {
        text: "Archive",
        onPress: () => {
          archiveItemToDatabase(id);
          removeItemFromList(id);
        }
      },
      {
        text: "Cancel",
        onPress: () => {
          console.table(list);
        }
      },
      {
        text: "OK",
        onPress: () => {
          removeItemFromList(id);
          deleteItemFromDatabase(id);
        }
      }
    ],
    {
      cancelable: true,
    }
  );

};

export default CreateAlert;