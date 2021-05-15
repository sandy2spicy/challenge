import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";

import {
  BoldTextView,
  CountryDetails,
  CountryListContainer,
  CountryOtherDetails,
  LightSmallTextView,
  LightTextView,
  CountryNameContainer,
  CountryContentContainer,
} from "./country-item.styles";

const CountryListItem = ({ country: {item} }) => {
  const {
    code,
    capital,
    name,
    phone,
    currency,
    continent: {name: contName},
  } = item;
  return (
    <CountryListContainer>
      <Avatar.Text size={48} label={code}
       style={{
         backgroundColor: '#2196F3'
       }}
      />
      <CountryContentContainer>
        <CountryDetails>
          <CountryNameContainer>
            <BoldTextView numberOfLines={1}>{name},</BoldTextView>
            <LightTextView numberOfLines={1}>{capital}</LightTextView>
          </CountryNameContainer>
          <View>
            <BoldTextView>Currency: {currency}</BoldTextView>
          </View>
        </CountryDetails>
        <CountryOtherDetails>
          <View>
            <LightSmallTextView>{contName}</LightSmallTextView>
          </View>
          <View>
            <BoldTextView>Phone: {phone}</BoldTextView>
          </View>
        </CountryOtherDetails>
      </CountryContentContainer>
    </CountryListContainer>
  );
};

export default CountryListItem;
