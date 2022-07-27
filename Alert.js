import {Alert} from 'react-native';
import { addItemToDatabase, archiveItemToDatabase, deleteItemFromDatabase, fetchAllItems } from './db';

const CreateAlert = (index, item, addToList) => {

    const removeItem = (index) =>{
      addToList(list=>list.filter((item, id)=>id!=index));
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
            deleteItemFromDatabase(index, item);
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