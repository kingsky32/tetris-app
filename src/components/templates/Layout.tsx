import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import KeyboardAvoidingView from './KeyboardAvoidingView';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView containerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default Layout;
