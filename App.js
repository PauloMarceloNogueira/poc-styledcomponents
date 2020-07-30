import { ThemeProvider } from "styled-components";
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Share, Appearance, StatusBar } from 'react-native';
import { AppBar, Button } from './src/Components';
import { lightTheme, darkTheme } from './src/Styles';

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

  const isLight = theme === 'light'
  const styleTheme = isLight ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={{ mode: theme, ...styleTheme }}>
      <StatusBar barStyle='light-content' />
      <ScrollView style={{ backgroundColor: isLight ? '#fff' : '#000', flex: 1 }}>

        <AppBar title='Dark Mode' handleFc={themeToggler} />

        <View style={styles.container}>
          <Button type={'Primary'} text="Primary Button" handleFc={onShare} />
          <Button type={'Secondary'} text="Secondary Button" />
          <Button type={'OutlinePrimary'} text="Primary Button Outline" />
          <Button type={'OutlineSecondary'} text="Secondary Button Outline" />
          <Button type={'Ghost'} text="Ghost Button" />
        </View>

      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
