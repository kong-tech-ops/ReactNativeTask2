import {Alert} from 'react-native';
import { archiveItemToDatabase, deleteItemFromDatabase, fetchAllItems} from './db';

const CreateAlert = (anID, index, item, addToList) => {

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
            archiveItemToDatabase(anID, item, 1);
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
            deleteItemFromDatabase(anID, item);
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