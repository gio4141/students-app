import { Platform, View, ViewProps } from 'react-native';

import { IS_IOS } from '../../../src/core/constants';
import { useTheme } from '../hooks/useTheme';

export type CardProps = ViewProps & {
  /**
   * Toggles the rounded corners
   */
  rounded?: boolean;

  /**
   * Toggles the outer spacing
   */
  spaced?: boolean;

  /**
   * If true, uses a semi-transparent background
   * for use on translucent surfaces
   */
  translucent?: boolean;
};

/**
 * Renders an elevated surface on Android and a
 * flat card on iOS
 */
export const Card = ({
  children,
  style,
  translucent = false,
  spaced = Platform.select({ ios: true, android: false }),
  rounded = Platform.select({ ios: true, android: false }),
  ...rest
}: CardProps) => {
  const { colors, shapes, spacing } = useTheme();

  return (
    <View
      style={[
        {
          borderRadius: rounded ? shapes.lg : undefined,
          backgroundColor:
            IS_IOS && translucent ? colors.translucentSurface : colors.surface,
          elevation: 2,
          marginHorizontal: spaced ? spacing[5] : undefined,
          marginVertical: spaced ? spacing[2] : undefined,
          overflow: 'hidden',
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};
