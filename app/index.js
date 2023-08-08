import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, FONTS, SIZES, icons } from "../constants/index";
import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: true,
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={icons.search} dimension="100%" />;
          },
          headerTitle: () => {
            return <></>;
          },
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: SIZES.medium,
        }}>
          <Text>Ahmad Zaki Akmal</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
