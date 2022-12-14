import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Colors from '../../Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: wp(24),
  },
  viewspace: {
    width: wp(30),
    height: wp(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    width: wp(28),
    top: wp(1),
  },
  videoname: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '600',
    bottom: wp(2),
  },
  iocnimag: {
    width: wp(4),
    height: wp(4),
  },
  lineview: {
    width: wp(90),
    height: wp(2),
    borderBottomWidth: 1,
    borderBottomColor: Colors.maincolor,
    backgroundColor: Colors.transperentheader,
    alignSelf: 'center',
  },
  imagevie: {
    width: wp(8),
    height: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(8),
    backgroundColor: Colors.transperent,
  },
  viewstrend: {
    width: wp(28),
    borderRadius: wp(1),
    height: wp(33),
    backgroundColor: Colors.transperentheader,
  },
  imaginner: {
    width: wp(28),
    borderRadius: wp(2),
    height: wp(33),
  },
  flatview: {
    width: wp(90),
    height: wp(35),
    backgroundColor: Colors.transperentheader,
  },
  seetouch: {
    backgroundColor: Colors.transperentheader,
    width: wp(17),
    height: wp(8),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hrtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.black,
  },
  hrtitlesee: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.maincolor,
  },
  hedview: {
    width: wp(90),
    height: wp(8),
    backgroundColor: Colors.transperentheader,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    alignItems: 'center',
  },
  innercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(7),
    paddingBottom: wp(20),
  },
});
