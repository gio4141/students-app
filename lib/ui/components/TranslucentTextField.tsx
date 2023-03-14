import { Platform, StyleSheet } from 'react-native';

import { Props, TextField } from '@lib/ui/components/TextField';
import { useStylesheet } from '@lib/ui/hooks/useStylesheet';
import { Theme } from '@lib/ui/types/theme';

export const TranslucentTextField = (props: Props) => {
  const styles = useStylesheet(createStyles);
  return (
    <TextField
      {...props}
      style={[styles.textFieldInput, props.style]}
      inputStyle={[styles.input, props.inputStyle]}
    />
  );
};

const createStyles = ({ shapes, spacing }: Theme) =>
  StyleSheet.create({
    textFieldInput: {
      backgroundColor: 'rgba(0, 0, 0, .1)',
      borderRadius: shapes.xl,
      paddingVertical: 0,
      marginHorizontal: spacing[2],
    },
    input: {
      margin: 0,
      borderBottomWidth: 0,
      paddingVertical: spacing[Platform.OS === 'ios' ? 2 : 1],
    },
  });