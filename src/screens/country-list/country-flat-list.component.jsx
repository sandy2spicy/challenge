import React from "react";
import { FlatList } from "react-native";

import CountryListItem from "../../shared/components/country-item/country-item.component";
import {
  WarningText,
  WarningContainer,
} from "./country-list.styles";

const CountryFlatList = ({ countries }) => {
  return countries.length ? (
    <FlatList
      data={countries}
      renderItem={(item) => <CountryListItem country={item} />}
      keyExtractor={(country) => country.code}
    />
  ) : (
    <WarningContainer>
          <WarningText>No results found</WarningText>
        </WarningContainer>
  );
};

export default CountryFlatList;
