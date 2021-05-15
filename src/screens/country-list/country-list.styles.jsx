import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { colors } from "../../variables/colors";
import { ActivityIndicator } from "react-native-paper";

export const SearchBarView = styled(Searchbar)`
  padding: 1px;
  margin: 10px 0px;
  background-color: ${colors.screen.bg};
`;

export const ContentLoadingIndicator = styled(ActivityIndicator)`
  margin-top: 40px;
`;

export const WarningContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const WarningText = styled.Text`
  position: absolute;
  top: 40%;
  color: ${colors.text.secondary};
  font-size: 15px;
  font-family: "Roboto_400Regular";
`;
