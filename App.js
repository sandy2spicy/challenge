import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import CountryListScreen from "./src/screens/country-list/country-list.component";
import SafeArea from "./src/shared/components/safe-area/safe-area.component";
import { CountryContextProvider } from "./src/providers/country-list/country-list.context";

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeArea>
      <CountryContextProvider>
        <CountryListScreen />
        <StatusBar style="auto" />
      </CountryContextProvider>
    </SafeArea>
  );
}