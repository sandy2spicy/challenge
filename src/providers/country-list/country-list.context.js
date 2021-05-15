import React, { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const CountryContext = React.createContext();

export const CountryContextProvider = ({ children }) => {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  

  const COUNTRY_QUERY = gql`
    query countries($countryCode: String!) {
      countries(filter: { continent: { eq: $countryCode } }) {
        capital
        code
        name
        currency
        phone
        continent {
          name
        }
      }
    }
  `;

  useEffect(() => {
    if(keyword.length === 0) {
      setIsLoading(false);
      return;
    }
    fetchResult = async () => {
      try {
        const response = await client.query({
          query: COUNTRY_QUERY,
          variables: {
            countryCode: keyword.toUpperCase(),
          },
        });
        setResult(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setResult(null);
        setIsLoading(false);
      }
    };
    fetchResult();
  }, [keyword]);


  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  return (
    <CountryContext.Provider
      value={{
        isLoading,
        error,
        result,
        search: onSearch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
