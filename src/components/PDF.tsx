import { Document, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
  },
  section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
  }
});


interface ??? {
  ???
}

const  MyDocument: FC<???> = ({ name, picture }) => {
  return (
      <Document>
          <Page size="A4" style={styles.page} wrap>
              <View style={styles.section}>
                  <Text>Section #1</Text>
              </View>
              <View style={styles.section}>
                  <Text>{name}</Text>
              </View>

              <View style={styles.section}>
                  {picture && <Image src={picture} />}
                  </View>
          </Page>
      </Document>
  )
}