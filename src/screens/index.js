import { Navigation } from 'react-native-navigation';

import PortfolioScreen from '../components/Portfolio';
import DetailsScreen from '../components/Details';
import AboutScreen from '../components/About';
import ContactScreen from '../components/Contact';

export function registerScreens(store, Provider) {
  	Navigation.registerComponent('prodz.Portfolio', () => PortfolioScreen, store, Provider);
  	Navigation.registerComponent('prodz.Details', () => DetailsScreen, store, Provider);
  	Navigation.registerComponent('prodz.About', () => AboutScreen, store, Provider);
  	Navigation.registerComponent('prodz.Contact', () => ContactScreen, store, Provider);
}