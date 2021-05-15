import React, { useState } from "react";

import { Picker } from "@react-native-picker/picker";

import {
  FilterContainer,
  FilterByContainer,
  OrderByContainer,
  FilterText,
  FilterByButtonContainer,
  CaretDownButton,
  CaretUpButton,
  FilterByPicker,
} from "./filter.styles";

const pickerItems = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Currency",
    value: "currency",
  },
];

const Filter = ({onSortChange, onFilterChange}) => {
  const [selectedFilter, setSelectedFilter] = useState();
  const [isAscending, setIsAscending] = useState(true);
  return (
    <FilterContainer>
      <FilterByContainer>
        <FilterText>Sort by:</FilterText>
        <FilterByPicker
          selectedValue={selectedFilter}
          mode="dropdown"
          onValueChange={(itemValue, _) => {
            setSelectedFilter(itemValue);
            onFilterChange(itemValue)
          }}
          itemStyle={{
            padding: 0,
          }}
        >
          {pickerItems.map((item, idx) => {
            return <Picker.Item key={idx} {...item} />;
          })}
        </FilterByPicker>
      </FilterByContainer>
      <OrderByContainer>
        <FilterByButtonContainer
          onPress={() => {
            onSortChange(!isAscending);
            setIsAscending(!isAscending);
          }}
        >
          <FilterText>Order:</FilterText>
          <CaretDownButton
            isAscending={isAscending}
            name="caret-down-outline"
            size={18}
          />
          <CaretUpButton
            isAscending={isAscending}
            name="caret-up-outline"
            size={18}
          />
        </FilterByButtonContainer>
      </OrderByContainer>
    </FilterContainer>
  );
};

export default Filter;
