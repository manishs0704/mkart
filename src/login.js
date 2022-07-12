import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../app/components/Container';
import CustomInput from '../app/components/CustomInput';
import Label from '../app/components/Label';
import {appColors, shadow} from '../app/utils/appColors';

export default function Login() {
  return (
    <Container isScrollable>
      <View
        style={{
          marginTop: scale(50),
          backgroundColor: appColors.white,
          ...shadow,
          padding: scale(15),
          borderRadius: scale(5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Label
            text="Welcome,"
            style={{fontSize: scale(30), fontWeight: '700'}}
          />
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Label
              text="Sign Up"
              style={{
                fontSize: scale(14),
                fontWeight: '500',
                color: appColors.primary,
              }}
            />
          </Pressable>
        </View>
        <View style={{paddingVertical: scale(15)}}>
          <Label
            text="Sign in to Continue"
            style={{
              fontSize: scale(16),
              //fontWeight: '500',
              color: appColors.darkGray,
            }}
          />
        </View>
        <View style={{paddingVertical: scale(10)}}>
          <CustomInput
            onChangeText={text => onChangeText('email', text)}
            keyboardType="email-address"
            label="Email"
            placeholder="manishsharmait07.com"
          />
        </View>
        <View style={{paddingVertical: scale(10)}}>
          <CustomInput
            onChangeText={text => onChangeText('password', text)}
            secureTextEntry
            label="Password"
            placeholder="Password"
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('Verification')}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: scale(10),
          }}>
          <Label
            text="Forgot password"
            style={{
              fontSize: scale(14),
            }}
          />
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: scale(20),
        }}>
        <Label
          text="-OR-"
          style={{
            fontSize: scale(18),
          }}
        />
      </View>
    </Container>
  );
}
