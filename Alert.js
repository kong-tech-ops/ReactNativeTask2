import {Alert} from 'react-native';
import { archiveItemToDatabase, deleteItemFromDatabase, fetchAllItems} from './db';

const CreateAlert = (anID, item, addToList) => {

    const removeItem = (anID) => {
      addToList(list=>list.filter((item, anID) => anID !==anID))
    }

    Alert.alert(
      "Delete?",
      "Do you want to delete this item?",
      [
        {
          text: "Archive",
          onPress: () => {
            archiveItemToDatabase(anID, item, 1);
            removeItem(anID);
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
            deleteItemFromDatabase(anID, item);
            removeItem(anID);
          }
        }
      ],
      {
        cancelable:true,
      }
    );
          
};

export default CreateAlert;