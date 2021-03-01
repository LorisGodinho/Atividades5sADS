import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   View,
   Text,
   Image,
   touchabkeOpacity,
   Touchable
}  from 'react-native'

import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugIntructions,
   ReloadIntructions,
}  from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
   return (
      <SafeAreaView>
         
         <View style = { styles.linhaNomeImage }>  
         
            <View style={ { flexDirection:'row', alignItems: 'center' } }>
            <Touchable>
               <View>
                  <Image 
                     style={{ width: 55, height: 55, borderRadius: 50 }}
                     source={{
                        uri: 'https://i.pinimg.com/originals/86/8e/a5/868ea5e9da0035762f5b664fc8df143d.jpg'
                     }}  
                  
                     />
               </View>
            </Touchable>
            
            <text style = { styles.nomeUsuario }>Loris Godinho</text>
            
            </View>
            
            <Touchable>
               <View>
                  <text style = { { FontSize: 30, color: '#c4c4c4' } }>...</text>
               </View>
            </Touchable>

         </View>   

   {/* View da Foto */}
         <View>
            <image
               style={ styles.fotoPost }
               source={ {
                  uri: 'https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:48124?height=729&width=1296&format=jpg&quality=.7'
               } }
            />
         </View>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create( { 
   fotoPost: {
      width: '100%',
      height: 350 
   },
   linhaNomeImage:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      alignItems: 'center', 
      marginBottom: 10
   },
   nomeUsuario:{ 
      fontSize: 18,
      color: '#000',
      marginLeft: 10,
      fontWeight: 'bold'
   }
} );

export default App;