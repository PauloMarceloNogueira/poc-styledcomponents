import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Share, TouchableOpacity, Appearance } from 'react-native';
import Button from './src/Components/Button';
import { lightTheme, darkTheme } from './src/Components/Theme';

export default function App() {
  const [theme, setTheme] = useState('light');
  const colorScheme = Appearance.getColorScheme();
  Appearance.addChangeListener(() => {
    themeToggler()
  })
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme(colorScheme)
  }


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const styleTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={{ mode: theme, ...styleTheme }}>
      <SafeAreaView >
        <ScrollView >
          <View style={styles.header}>
            <TouchableOpacity onPress={themeToggler}>
              <Text>Alterar Theme</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Button type={'Primary'} text="Primary Button" handleFc={onShare} />
            <Button type={'Secondary'} text="Secondary Button" />
            <Button type={'OutlinePrimary'} text="Primary Button Outline" />
            <Button type={'OutlineSecondary'} text="Secondary Button Outline" />
            <Button type={'Ghost'} text="Ghost Button" />
          </View>

        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 34
  }
});
