import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Rakesh",
    description:
      "Nullam sed dolor nunc. Aliquam varius lectus ut tellus fringilla ultrices. Vivamus urna arcu, condimentum ac tristique non, efficitur luctus lorem. Maecenas hendrerit a elit eget vulputate. Integer pulvinar et ligula vitae vulputate. Nulla euismod in ante fringilla porttitor. Curabitur eget eros magna. ",
    image: require("../assets/men.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/men.jpg"),
  },
];

function MessagesScreen(props) {
  //messages = current state
  //setMessages = the function that let me update the state
  //initialMessages = initial value of the state
  const [messages, setMessages] = useState(initialMessages);
  //IDK why the hook was created even the state is not changed throughout the app ....
  //setRefreshing function is not also defined ....
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        //this still works if I replace with false, but doesnt work if delete the line itself ...
        //value of refreshing did not change while debugging ...
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "Updated Message",
              description: "D2",
              image: require("../assets/men.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
