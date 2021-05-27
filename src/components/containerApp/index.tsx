import React from "react";
import { useTheme, View, Text } from 'vcc-ui';
interface ContainerAppProps {
  children?: React.ReactNode;
  title?: string;
}
const ContainerApp = ({ children, title }: ContainerAppProps) => {
  const theme = useTheme();
  return (
    <View
      padding={[1, 2]}
      spacing={2}
      direction={"column"}
      justifyContent={"center"}
      height={"100vh"}
      extend={{
        background: theme.color.background.secondary,
      }}
    >
      <View  alignSelf={"center"}>
        <Text variant="hillary" subStyle="emphasis">
         {title}
        </Text>
      </View>

      <View
        direction={"column"}
        padding={[1, 2]}
        spacing={2}
      >
        {children}
      </View>
    </View>
  );
};
export default ContainerApp;
