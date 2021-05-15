import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  padding-left: 10px;
  padding-right: 10px;
`;

export default SafeArea;
