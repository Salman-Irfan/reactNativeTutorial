import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,

} from 'react-native';


const App = (): React.JSX.Element => {

const handleButtonPress = (id:number) => {
  console.log(`button pressed`);
  console.log(id)
};

  return (
    <>
      <SafeAreaView>
        <ScrollView>

          <Text style={{ fontSize: 30 }} >Hello React Native</Text>
          <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore porro illo error incidunt? Error repudiandae illo numquam neque unde ipsum. Veniam deleniti facere maiores non error, repudiandae quaerat quis dignissimos doloribus magni autem distinctio provident dolor ad consectetur nulla. Quas doloribus quibusdam quos obcaecati culpa officia ut eaque quidem natus.</Text>
          {/* button */}
          <Button 
            title='Press Here' 
            color={'red'}
            onPress={()=>handleButtonPress(7)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}



export default App;
