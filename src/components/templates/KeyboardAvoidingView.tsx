import React from 'react';
import {
  Keyboard,
  Dimensions,
  Platform,
  KeyboardEvent,
  ViewStyle,
  View,
  StyleSheet,
} from 'react-native';

interface KeyboardAvoidingViewProps {
  children: JSX.Element | JSX.Element[];
  containerStyle?: ViewStyle;
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'black',
  },
});

const KeyboardAvoidingView = ({
  children,
  containerStyle,
}: KeyboardAvoidingViewProps): React.ReactElement => {
  const [keyboardOffset, setKeyboardOffset] = React.useState(0);
  const { height: windowHeight } = React.useMemo(() => Dimensions.get('window'), []);

  const handleKeyboardShow = ({ endCoordinates: { height } }: KeyboardEvent) => {
    setKeyboardOffset(height);
  };

  const handleKeyboardHide = () => {
    setKeyboardOffset(0);
  };

  const getKeyboardOffsetStyle = () =>
    Platform.select({
      ios: () => ({ paddingBottom: keyboardOffset }),
      android: () => ({ paddingBottom: windowHeight - keyboardOffset }),
    });

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
    Keyboard.addListener('keyboardWillShow', handleKeyboardShow);
    Keyboard.addListener('keyboardWillHide', handleKeyboardHide);
    Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardShow);
      Keyboard.removeListener('keyboardWillShow', handleKeyboardShow);
      Keyboard.removeListener('keyboardWillHide', handleKeyboardHide);
      Keyboard.removeListener('keyboardDidHide', handleKeyboardHide);
    };
  }, []);

  return (
    <View style={[styles.containerStyle, containerStyle, { ...getKeyboardOffsetStyle() }]}>
      {children}
    </View>
  );
};

KeyboardAvoidingView.defaultProps = {
  containerStyle: {},
};

export default KeyboardAvoidingView;
