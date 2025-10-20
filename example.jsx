import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ProfileCard() {
  return (
    <View className="bg-white shadow-md rounded-lg p-5 flex items-center">
      <Image source={require('./avatar.png')} className="w-20 h-20 rounded-full mb-3" />
      <Text className="text-xl font-semibold text-gray-900">Jane Doe</Text>
      <Text className="text-sm text-gray-500">Frontend Developer</Text>
      <TouchableOpacity className="mt-4 bg-blue-600 px-4 py-2 rounded-full">
        <Text className="text-white font-medium">Follow</Text>
      </TouchableOpacity>
    </View>
  );
}