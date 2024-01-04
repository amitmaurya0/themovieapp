import { View, TouchableOpacity, Image } from "react-native";
import { NOW_PLAYING, POPULAR_ICON, TOP_RATED, UPCOMING } from './../configs/images'
import { Text } from './../components/styles';

const NAV_ICONS = {
    'top-rated': TOP_RATED,
    'popular': POPULAR_ICON,
    'now-playing': NOW_PLAYING,
    'upcoming': UPCOMING,
};

function CustomTabDesign({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row', height: 50 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
                key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <Image source={NAV_ICONS[route.name]} tintColor={isFocused ? '#673ab7' : '#222'} style={{ height: 18, width: 18 }} />
                <Text style={{ color: isFocused ? '#673ab7' : '#222', marginTop: 2 }}>
                    {label}
                </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  export default CustomTabDesign;
