import {Alert} from 'react-native';

const CreateAlert = (index, addToList) => {

    const removeItem = (index) =>{
      addToList(list=>list.filter((item, id)=>id!=index));
    }
  
    Alert.alert(
      "Delete?",
      "Do you want to delete this item?",
      [
        {
          text: "Archive",
          onPress: () => console.log("Archive pressed")
        },
        {
          text: "Cancel"
        },
        { 
          text: "OK",
          onPress: () => removeItem(index)
        }
      ],
      {
        cancelable:true,
      }
    );
          
};

export default CreateAlert;