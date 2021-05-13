import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../component/ListItem';
import AppScreen from '../component/AppScreen';
import ListItemSeparator from '../component/ListItemSeparator';
import ListItemDeleteAction from '../component/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/me.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/me.jpg"),
    }
]

function MessageScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <AppScreen>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={ ({ item }) => (
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Selected", item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../assets/me.jpg"),
                        }
                    ])
                }}
             />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    
});

export default MessageScreen;