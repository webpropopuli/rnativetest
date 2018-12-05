import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 3;
const imageHeight = Dimensions.get('window').height / 3;

styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageHeight,
  },
  logo: {
    width: imageWidth / 1.5,
  },
  text: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 10,
    fontWeight: '600',
  },
});

export default styles;
