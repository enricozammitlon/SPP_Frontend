FROM reactnativecommunity/react-native-android:latest
WORKDIR /app
RUN yarn global add ignite-cli expo-cli react-native-cli
RUN yarn install
COPY . ./