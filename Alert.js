import { Alert } from 'react-native';
import { archiveItemToDatabase, deleteItemFromDatabase, fetchAllItems } from './db';

const CreateAlert = (id, item, addToList) => {

  const removeItem = () => {
    addToList(list => list.filter((id) => id != id));
  }

  Alert.alert(
    "Delete?",
    "Do you want to delete this item?",
    [
      {
        text: "Archive",
        onPress: () => {
          archiveItemToDatabase(id);
          removeItem(id);
        }
      },
      {
        text: "Cancel",
        onPress: () => {
          fetchAllItems();
        }
      },
      {
        text: "OK",
        onPress: () => {
          deleteItemFromDatabase(id);
          removeItem(id);
        }
      }
    ],
    {
      cancelable: true,
    }
  );

};

export default CreateAlert;