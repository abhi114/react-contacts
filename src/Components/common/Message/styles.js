import { StyleSheet } from "react-native";
import colors from "../../../assets/themes/colors";

export default StyleSheet.create({
    wrapper:{
        height:42,
        paddingVertical:13,
        paddingHorizontal:5,
        marginVertical:20,
        borderRadius:4,
        //alignItems:"center",
        //justifyContent:"space-evenly"
    },
    loaderSection:{
        flexDirection:"row"
    },
    textCustomButton:{
        flex:1,
        width:'100%',
    },
    error:{
        color:colors.danger,
        paddingTop:5,
        fontSize:12
    }
})