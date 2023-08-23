import { View, Text,Image} from "react-native";
import {styles, myimage} from '../assets/styles/styles1'


function Banner(props) {
    return (
    <Image
      style={{width:'80%', height:'70%', resizeMode:'strech'} }
      source={require(`../assets/images/${props.imagename}`)}
    />
    );
}

export default Banner;
  