import { Box } from "@mui/material";
import Image from "next/image";
import { Space } from "../Space";
import { keyframes } from "@mui/system";

export const FullLogo = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          borderRadius: "50px",
          background: "#f5f5f5",
          position: "relative",
          animation: `${grayscale} 2s ease`,
          "::before": {
            filter: "grayscale(1)",
            animation: `${fadeOut} 3s ease`,
            content: "''",
            position: "absolute",
            borderRadius: "50px",
            width: "100%",
            height: "100%",
            boxShadow:
              "inset 20px 20px 60px #cacaca, inset -20px -20px 60px #f6f6f6",
            opacity: 0,
          },
          "::after": {
            animation: `${fadeIn} 3s ease`,
            content: "''",
            position: "absolute",
            borderRadius: "50px",
            width: "100%",
            height: "100%",
            boxShadow: "13px 13px 20px #aeaeae, -13px -13px 20px #ffffff",
          },
        }}
        width={350}
        height={350}
        justifyContent="center"
        alignItems="center"
        display={"flex"}
        flexDirection="column"
      >
        <Image
          src={"/assets/only-logo.svg"}
          width={300}
          height={300}
          alt="fågla app logo"
        />
      </Box>
      <Space size={40} />
      <Box
        sx={{
          animation: `${grayscale} 3s ease`,
        }}
      >
        <Image
          src={"/assets/text-logo.svg"}
          width={200}
          height={100}
          alt="fågla text logo"
        />
      </Box>
    </Box>
  );
};

const fadeIn = keyframes`
0% {
  opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
0% {
  opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const grayscale = keyframes`
0% {
  filter: grayscale(1);
  }
  100% {
    filter: grayscale(0);
  }
`;
