import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import {colors} from '../../../variables/colors'
import { Picker } from "@react-native-picker/picker";


export const FilterContainer = styled.View`
    height: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const FilterByContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const OrderByContainer = styled.View`
    flex-direction: row;
`;

export const FilterText = styled.Text`
    color: ${colors.text.secondary};
    font-size: 15px;
    font-family: 'Roboto_400Regular';
`;

export const FilterByButtonContainer = styled.TouchableOpacity`
  margin-left: 10px;
  flex-direction: row;
  align-items: center; 
`

export const ButtonText = styled(FilterText)`
  color: ${colors.button.secondary};
`

export const FilterByPicker = styled(Picker)`
  width: 130px;
  height: 20px;
`

export const CaretDownButton = styled(Ionicons).attrs(
    ({isAscending}) => ({
        color: isAscending ? colors.button.secondary: colors.button.disabled
    })
)`
`

export const CaretUpButton = styled(Ionicons).attrs(
    ({isAscending}) => ({
        color: isAscending ? colors.button.disabled: colors.button.secondary
    })
)`
`





