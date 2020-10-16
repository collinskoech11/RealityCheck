import React from 'react';


export default function Header() {
    return (
        <>
        <View style={styles.container}>
        <div class="Main">
            This is the App Header
        </div>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });