import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [count, setCounter] = React.useState<number>(0);
  const [bufferNumber, setBufferNumber] = React.useState<number>(0);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 10,
          height: 60,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "roboto",
            fontSize: 32,
          }}
        >
          COUNTER
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",

          alignItems: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "space-between",
            width: 270,
            padding: 10,
          }}
        >
          <Text>Add Buffer number:</Text>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",

              width: 100,
            }}
          >
            <TextInput
              style={{
                fontWeight: "bold",
                fontSize: 20,
                width: 100,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              value={bufferNumber.toString()}
              onChangeText={(text) =>
                setBufferNumber(isNaN(Number(text)) ? 0 : Number(text))
              }
              keyboardType="numeric"
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 50 }}>{count}</Text>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "space-between",
              alignItems: "center",
              width: 230,
            }}
          >
            <View>
              <Button
                onPress={() => {
                  setCounter(
                    count >= bufferNumber ? count - bufferNumber : count
                  );
                }}
                title="Decrement"
              />
            </View>
            <View>
              <Button
                onPress={() => setCounter(count + bufferNumber)}
                title="Increment"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
