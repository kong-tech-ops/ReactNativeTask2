import {Alert} from 'react-native';
import { archiveItemToDatabase, deleteItemFromDatabase, fetchAllItems} from './db';

const CreateAlert = (id, item, addToList, index) => {

    const removeItem = (index) => {
      addToList(list=>list.filter((item, id) => id !=index))
    }

    Alert.alert(
      "Delete?",
      "Do you want to delete this item?",
      [
        {
          text: "Archive",
          onPress: () => {
            archiveItemToDatabase(item, 1);
            removeItem(index);
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
            deleteItemFromDatabase(id, item);
            removeItem(index);
          }
        }
      ],
      {
        cancelable:true,
      }
    );
          
};

export default CreateAlert;