import { useMediaQuery } from "react-responsive";

function ResponsiveBg(mobile, tablet, desktop) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  if (isMobile) return mobile;
  if (isTablet) return tablet;
  return desktop;
}

export default ResponsiveBg;
