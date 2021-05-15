import React, { useContext, useEffect, useState } from "react";
import Filter from "../../shared/components/filter/filter.component";
import {
  SearchBarView,
  ContentLoadingIndicator,
  WarningText,
  WarningContainer,
} from "./country-list.styles";
import { CountryContext } from "../../providers/country-list/country-list.context";
import CountryFlatList from "./country-flat-list.component";

const CountryListScreen = () => {
  const { result, isLoading, search, error } = useContext(CountryContext);
  const [countryList, setCountryList] = useState(null);
  const [sortBy, setSortBy] = useState("name");
  const [isAscending, setIsAscending] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    transformResult();
  }, [result, sortBy, isAscending]);

  const transformResult = () => {
    if (result && result.countries) {
      const data = result.countries
        .slice()
        .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      setCountryList(isAscending ? data : data.reverse());
    } else {
      setCountryList(null);
    }
  };

  return (
    <>
      <SearchBarView
        placeholder="Input continent code (EU, AS ...)"
        value={searchKeyword}
        onChangeText={(query) => {
          setSearchKeyword(query);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        autoCapitalize="characters"
        clearIcon={null}
      />
      <Filter
        onFilterChange={(value) => setSortBy(value)}
        onSortChange={(value) => setIsAscending(value)}
      />
      {isLoading ? (
        <ContentLoadingIndicator size="large" animating={true} />
      ) : error ? (
        <WarningContainer>
          <WarningText>Something went wrong</WarningText>
        </WarningContainer>
      ) : countryList  ? (
        <CountryFlatList countries={countryList} />
      ) : (
        <WarningContainer>
          <WarningText>
            Start by searching with continent code
          </WarningText>
        </WarningContainer>
      )}
    </>
  );
};

export default CountryListScreen;
