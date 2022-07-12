import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import {} from 'react-native-gesture-handler';

import {appColors, shadow} from '../app/utils/appColors';
import TouchableRipple from 'react-native-touch-ripple';
import Label from '../app/components/Label';
import Container from '../app/components/Container';
import {scale} from 'react-native-size-matters';
import SearchBox from '../app/components/SearchBox';

export default function Home() {
  return (
    <Container isScrollable style={styles.container}>
      <SearchBox onFoucs={() => navigation.navigate('Search')} />
      <View style={{paddingVertical: scale(30)}}>
        <FlatList
          style={{marginTop: scale(40)}}
          showsHorizontalScrollIndicator={false}
          horizontal
          ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
          renderItem={({item, index}) => {
            const {label, Icon} = item;
            return (
              <View key={index} style={{alignItems: 'center'}}>
                <TouchableRipple
                  onPress={() => {
                    getProducts$(label);
                    navigation.navigate('Category', {item});
                  }}
                  rippleColor={appColors.primary}
                  rippleContainerBorderRadius={scale(40)}
                  rippleDuration={800}
                  style={{
                    ...shadow,
                    backgroundColor: appColors.white,
                    height: scale(70),
                    width: scale(70),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: scale(40),
                  }}>
                  <Icon />
                </TouchableRipple>
                <View style={{marginTop: scale(15)}}>
                  <Label text={label} style={{fontSize: scale(14)}} />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        <View style={{paddingVertical: scale(25)}}></View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
          horizontal
          renderItem={({item, index}) => (
            <ProductCard key={index} item={item} />
          )}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
