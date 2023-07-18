import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../style/styleGlobal';
import IconIO from 'react-native-vector-icons/Ionicons';
import {BottomNavigation} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const TaskRoute = () => console.log('haha');

const ProjectsRoute = () => console.log('haha');

const ChatsRoute = () => console.log('haha');

const TeamsRoute = () => console.log('haha');

const AccountRoute = () => console.log('haha');

const TaskAllScreen = ({navigation}) => {
  const parentPadding = 20; // Adjust this value according to the parent view's padding
  const screenWidth = Dimensions.get('window').width;
  const boxWidth = screenWidth - 2 * parentPadding;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'task', title: 'Task', focusedIcon: 'view-list-outline'},
    {key: 'projects', title: 'Projects', focusedIcon: 'bag-checked'},
    {key: 'chats', title: 'Chats', focusedIcon: 'message'},
    {key: 'teams', title: 'Team', focusedIcon: 'account-multiple'},
    {key: 'accounts', title: 'Account', focusedIcon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    task: TaskRoute,
    projects: ProjectsRoute,
    chats: ChatsRoute,
    teams: TeamsRoute,
    accounts: AccountRoute,
  });

  useEffect(() => {
    FetchStorage();
  }, [navigation]);

  const FetchStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData');
      // console.log(value);
      const parsedArray = JSON.parse(value);
      setEmailData(parsedArray);

      // console.log('Retrieved array value:', parsedArray);
    } catch (error) {
      console.log('Error retrieving array value:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{flex: 1, paddingTop: parentPadding, backgroundColor: 'white'}}>
        <View
          style={{
            paddingHorizontal: (WW * 5) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.titleText}>Tasker</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                left: (WW * 30) / 100,
              }}>
              <IconIO
                name="search-outline"
                size={35}
                color={'black'}
                style={{marginHorizontal: (WW * 1) / 100}}
              />
              <IconIO
                name="md-notifications-outline"
                size={35}
                color={'black'}
                style={{marginHorizontal: (WW * 1) / 100}}
              />
              <View
                style={{
                  marginHorizontal: (WW * 1) / 100,
                }}>
                <Image
                  source={require('../assets/avatar.png')}
                  style={styles.imageavatar}></Image>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F0FAFF',
            width: '100%',
            borderRadius: 10,
          }}>
          <View style={styles.containerBoxTaskList}>
            <View style={styles.boxSpacer2}>
              <IconIO name="ios-clipboard" size={30} color={'white'} />
              <View style={{width: (WW * 1) / 100}}></View>
              <Text style={styles.h2white}>To do</Text>
            </View>
          </View>
        </View>
        <View style={styles.centered}>
          <View style={styles.containerCard}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.yellowball}></View>
              <Text style={styles.h2black}>Total Task</Text>
              <View style={{width: (WW * 25) / 100}}></View>
              <Text style={styles.h3gray}>4 Task</Text>
              <IconIO
                style={{marginLeft: (WW * 3) / 100}}
                name="ios-arrow-forward-outline"
                size={30}
                color={'rgba(0,0,0,0.25)'}
              />
            </View>
          </View>
          <View style={styles.containerCard}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.redball}></View>
              <Text style={styles.h2black}>To Do Task</Text>
              <View style={{width: (WW * 25) / 100}}></View>
              <Text style={styles.h3gray}>8 Task</Text>
              <IconIO
                style={{marginLeft: (WW * 3) / 100}}
                name="ios-arrow-forward-outline"
                size={30}
                color={'rgba(0,0,0,0.25)'}
              />
            </View>
          </View>
          <View style={styles.containerCard}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.greenball}></View>
              <Text style={styles.h2black}>On Progress Task</Text>
              <View style={{width: (WW * 10) / 100}}></View>
              <Text style={styles.h3gray}>8 Task</Text>
              <IconIO
                style={{marginLeft: (WW * 3) / 100}}
                name="ios-arrow-forward-outline"
                size={30}
                color={'rgba(0,0,0,0.25)'}
              />
            </View>
          </View>
          <View style={styles.containerCard}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.blueball}></View>
              <Text style={styles.h2black}>Done Task</Text>
              <View style={{width: (WW * 25) / 100}}></View>
              <Text style={styles.h3gray}>8 Task</Text>
              <IconIO
                style={{marginLeft: (WW * 3) / 100}}
                name="ios-arrow-forward-outline"
                size={30}
                color={'rgba(0,0,0,0.25)'}
              />
            </View>
          </View>
        </View>
      </View>
      <BottomNavigation
        style={styles.bottomNavigation}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        theme={{colors: {secondaryContainer: '#4483f9'}}}
      />
    </View>
  );
};

export default TaskAllScreen;
