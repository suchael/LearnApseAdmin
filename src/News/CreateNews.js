// NewsComponent.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const NewsComponent = () => {
  const [headerText, setHeaderText] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [image, setImage] = useState(null);

 

  const handleSend = () => {
    console.log('Sending News:', { headerText, newsContent, image });
    setHeaderText('');
    setNewsContent('');
    setImage(null);
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Image Picker */}
      <TouchableOpacity onPress={()=>{console.log("img")}} style={{ width: 180, justifyContent: 'space-around', alignItems: 'center', flexDirection: "row",height: 40, marginBottom: 20, backgroundColor: "blue"}}>
        <Text style={{ color: 'white', }}>Select Image</Text>
        <FontAwesome name="angle-down" size={24} color="white" />
      </TouchableOpacity>

        {/* News Header */}
      <TextInput
        style={{ fontSize: 20, marginBottom: 10, borderWidth: 2, borderColor: "lightgray" }}
        placeholder="Enter Header Text"
        value={headerText}
        onChangeText={(text) => setHeaderText(text)}
      />

      {/* News Content */}
      <TextInput
        style={{ fontSize: 16, marginBottom: 10, borderWidth: 2, borderColor: "lightgray" }}
        placeholder="Enter News Content"
        multiline
        numberOfLines={4}
        value={newsContent}
        onChangeText={(text) => setNewsContent(text)}
      />

      <TouchableOpacity onPress={handleSend} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsComponent;
