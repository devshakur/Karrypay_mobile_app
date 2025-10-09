import React from "react";
import { SvgXml } from "react-native-svg";

interface AppIconProps {
  name: "scan" | "fingerprint";
  width?: number;
  height?: number;
  color?: string;
}

const scanSvg = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4C1 1.79086 2.79086 0 5 0H7C7.55228 0 8 0.447715 8 1C8 1.55228 7.55228 2 7 2H5C3.89543 2 3 2.89543 3 4V6C3 6.55228 2.55228 7 2 7C1.44772 7 1 6.55228 1 6V4Z" fill="{{COLOR}}"/>
<path d="M21 4C21 1.79086 19.2091 0 17 0H15C14.4477 0 14 0.447715 14 1C14 1.55228 14.4477 2 15 2H17C18.1046 2 19 2.89543 19 4V6C19 6.55228 19.4477 7 20 7C20.5523 7 21 6.55228 21 6V4Z" fill="{{COLOR}}"/>
<path d="M5 20C2.79086 20 1 18.2091 1 16V14C1 13.4477 1.44772 13 2 13C2.55228 13 3 13.4477 3 14V16C3 17.1046 3.89543 18 5 18H7C7.55228 18 8 18.4477 8 19C8 19.5523 7.55228 20 7 20H5Z" fill="{{COLOR}}"/>
<path d="M21 16C21 18.2091 19.2091 20 17 20H15C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18H17C18.1046 18 19 17.1046 19 16V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V16Z" fill="{{COLOR}}"/>
<path d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H1Z" fill="{{COLOR}}"/>
</svg>`;

const fingerprintSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 17.2V12C2 6.47715 6.47715 2 12 2V2C17.5228 2 22 6.47715 22 12V21" stroke="{{COLOR}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 18.7143V17V11.6933C5 11.0461 5.11863 10.4044 5.35 9.8V9.8M19 11.8571C19 9.8091 18.0834 7.97076 16.6302 6.71429C15.3962 5.64738 13.7753 5 12 5C9.91335 5 8.03994 5.89438 6.75748 7.31316" stroke="{{COLOR}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13V12C8 9.79086 9.79086 8 12 8V8C14.2091 8 16 9.79086 16 12V12" stroke="{{COLOR}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12V13C12 14.1046 12.8954 15 14 15V15C15.1046 15 16 14.1046 16 13V12" stroke="{{COLOR}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12.4V12.5C8 15.5376 10.4624 18 13.5 18V18C16.5376 18 19 15.5376 19 12.5V12" stroke="{{COLOR}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3337 20C16.3234 20.6468 15.1224 21.0218 13.8337 21.0218C13.197 21.0218 12.5816 20.9292 12 20.7568" stroke="{{COLOR}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 19V20" stroke="{{COLOR}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const AppIcon: React.FC<AppIconProps> = ({
  name,
  width = 24,
  height = 24,
  color = "#2E358F",
}) => {
  const getSvgContent = () => {
    let svgContent: string;
    switch (name) {
      case "scan":
        svgContent = scanSvg;
        break;
      case "fingerprint":
        svgContent = fingerprintSvg;
        break;
      default:
        svgContent = scanSvg;
    }
    return svgContent.replace(/\{\{COLOR\}\}/g, color);
  };

  return <SvgXml xml={getSvgContent()} width={width} height={height} />;
};

export default AppIcon;
