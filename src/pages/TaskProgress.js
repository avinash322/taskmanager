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

const TaskProgressScreen = ({navigation}) => {
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
    <ScrollView>
      <View style={styles.container}>
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.containerBox}>
            <View style={styles.boxSpacer}>
              <View
                style={{
                  backgroundColor: 'rgba(255, 165, 0, 0.3)',
                  borderRadius: 5,
                }}>
                <IconIO name="time-outline" size={30} color={'orange'} />
              </View>
              <View style={{width: (WW * 5) / 100}}></View>
              <Text style={styles.h1bold}>08</Text>
            </View>
            <Text style={styles.h3gray}>Total Tasks</Text>
          </View>
          <View style={styles.containerBox}>
            <View style={styles.boxSpacer}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 255, 0, 0.3)',
                  borderRadius: 5,
                }}>
                <IconIO name="folder-outline" size={30} color={'#035900'} />
              </View>
              <View style={{width: (WW * 5) / 100}}></View>
              <Text style={styles.h1bold}>08</Text>
            </View>
            <Text numberOfLines={2} style={styles.h3gray}>
              On Progress
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.containerBox}>
            <View style={styles.boxSpacer}>
              <View
                style={{
                  backgroundColor: 'rgba(255, 0, 0, 0.3)',
                  borderRadius: 5,
                }}>
                <IconIO name="ios-clipboard-outline" size={30} color={'red'} />
              </View>
              <View style={{width: (WW * 5) / 100}}></View>
              <Text style={styles.h1bold}>08</Text>
            </View>
            <Text style={styles.h3gray}>To Do </Text>
          </View>
          <View style={styles.containerBox}>
            <View style={styles.boxSpacer}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 0, 255, 0.3)',
                  borderRadius: 5,
                }}>
                <IconIO name="people-outline" size={30} color={'blue'} />
              </View>
              <View style={{width: (WW * 5) / 100}}></View>
              <Text style={styles.h1bold}>08</Text>
            </View>
            <Text style={styles.h3gray}>Done</Text>
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
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        theme={{colors: {secondaryContainer: '#4483f9'}}}
      />
    </ScrollView>
  );
};

export default TaskProgressScreen;
