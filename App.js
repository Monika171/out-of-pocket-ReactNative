import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomStackNavigator} from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomStackNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses}/>
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses}/>
    </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
      <>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ExpensesOverview" component={ExpensesOverview}/>
            <Stack.Screen name="ManageExpense" component={ManageExpense}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}