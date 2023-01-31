import { useTheme } from "styled-components";

import { Container } from "./styles";
import ReactSwitch from "react-switch";
import { shade } from "polished";

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header(props: HeaderProps) {
  const { toggleTheme } = props;
  const theme = useTheme();
  return (
    <Container>
      header
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme.title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, theme.colors.primary)}
        onColor={theme.colors.secondary}
      />
    </Container>
  );
}
