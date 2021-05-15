import styled from "styled-components";
import {colors} from '../../../variables/colors'


export const CountryListContainer = styled.View`
  flex-direction: row;
  padding: 15px;
  border-color: ${colors.border.color};
  border-bottom-width: 1px;
`
export const CountryContentContainer = styled.View`
  padding-left: 15px;
  flex: 1;
`

export const CountryDetails = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`
export const CountryOtherDetails = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const CountryNameContainer = styled.View`
  flex-direction: row;
  overflow: hidden;
  max-width: 200px;
`

export const BoldTextView = styled.Text`
  font-size: 15px;
  font-family: 'Roboto_700Bold';
  color: ${colors.text.primary}
`

export const LightTextView = styled.Text`
  font-size: 15px;
  padding-left: 2px;
  font-family: 'Roboto_400Regular';
  color: ${colors.text.light}
`
export const LightSmallTextView = styled.Text`
  font-size: 13px;
  font-family: 'Roboto_400Regular';
  color: ${colors.text.light}
`

