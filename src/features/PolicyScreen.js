import React from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
class PolicyScreen extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper} loop={false}>
        {DATA.map((prop, key) => {
          return (
            <View style={styles.slide1}>
              <Text style={styles.text}>{prop.title}</Text>
            </View>
          );
        })}
      </Swiper>
    );
  }
}

export default PolicyScreen;

const styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};
