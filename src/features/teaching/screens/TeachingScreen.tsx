import { StyleSheet, Text, View } from 'react-native';
import { SectionHeader } from '../../../core/components/SectionHeader';

export const TeachingScreen = () => {
  return (
    <View>
      <View style={styles.sectionsContainer}>
        <View style={styles.section}>
          <SectionHeader title="Corsi" linkTo={{ screen: 'Teaching' }} />
          <Text>Lorem ipsum dolor sit amet</Text>
        </View>
        <View style={styles.section}>
          <SectionHeader title="Appelli" linkTo={{ screen: 'Teaching' }} />
          <Text>Lorem ipsum dolor sit amet</Text>
        </View>
        <View style={styles.section}>
          <SectionHeader title="Libretto" linkTo={{ screen: 'Teaching' }} />
          <Text>Lorem ipsum dolor sit amet</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionsContainer: {
    display: 'flex',
    paddingVertical: 18,
  },
  section: {
    marginBottom: 24,
  },
});

export default TeachingScreen;