import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {FText, VectorIcon} from '../../components';
import {Colors, FontSizes} from '../../theme';
import {Styles} from '../../styles';
import {useDispatch} from 'react-redux';
import {actSignOut} from '../../redux/actions';

const Settings = (props) => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(actSignOut());
  const RenderBtn = ({onPress, name, icon}) => (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      {icon}
      <FText h4 style={styles.nameBtn}>
        {name}
      </FText>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FText h3>Account Settings</FText>

      <RenderBtn
        name={'Logout'}
        icon={
          <VectorIcon
            AntDesign
            name={'logout'}
            size={20}
            color={Colors.red_fresh}
          />
        }
        onPress={signOut}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.6)',
    paddingTop: '10@vs',
    paddingLeft: '15@s',
  },
  btn: {
    marginVertical: '10@vs',
    ...Styles.row_start_center,
  },
  nameBtn: {
    marginLeft: '10@s',
  },
});

export default Settings;
