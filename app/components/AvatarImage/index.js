import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {appColors} from '../../utils/appColors';

const defaultSize = 64;

const AvatarImage = ({size = defaultSize, source, style, ...rest}) => {
  const {backgroundColor = appColors.primary} = StyleSheet.flatten(style) || {};

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
        style,
      ]}
      {...rest}>
      {typeof source === 'function' && source({size})}
      {typeof source !== 'function' && (
        <Image
          source={source}
          style={{width: size, height: size, borderRadius: size / 2}}
        />
      )}
    </View>
  );
};

AvatarImage.displayName = 'Avatar.Image';

export default AvatarImage;
