import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import iconGoogle from "../../assets/icons/Icon-Google.png";
import iconFacebook from "../../assets/icons/Icon-Facebook.png";
import iconTelegram from "../../assets/icons/Icon-Telegram.png";
import iconTwitter from "../../assets/icons/Icon-Twitter.png";
import { Button, Center, FormControl, Input, Modal } from "native-base";
import tw from "twrnc";
import { useState } from "react";
const arrayServices = [
  { icon: iconGoogle, name: "Google" },
  { icon: iconFacebook, name: "Facebook" },
  { icon: iconTelegram, name: "Telegram" },
  { icon: iconTwitter, name: "Twitter" },
];
const NewWallet = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={tw`p-5 android:pt-2 bg-[#F8FAFC] dark:bg-black h-full`}>
      <Image source={require("../../assets/icons/Combined-Shape.png")} />
      <Text style={tw`text-4xl text-black dark:text-white mt-10`}>
        New Wallet
      </Text>
      <Text style={tw`text-lg text-black dark:text-white mt-10`}>
        Choose one of your existing services
      </Text>

      {arrayServices.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              tw`flex flex-row justify-between bg-white items-center p-5  w-full rounded-full mt-5 shadow-lg`,
            ]}
            // onPress={() => setShowModal(true)}
          >
            <Image source={item.icon} />
            <Text style={tw`mr-auto ml-3 text-2xl uppercase`}>{item.name}</Text>
            <Text style={tw`mr-3`}>
              <Image source={require("../../assets/icons/Path.png")} />
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default NewWallet;
