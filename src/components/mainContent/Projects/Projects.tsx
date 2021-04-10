import { Project } from "./Project";
import { Box } from "@material-ui/core";

export const Projects = () => {
  return (
    <div>
      <h2 className="sub-name pb-10 text-white">Some of my work</h2>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Project />
        <Project />
        <Project />
        <Project />
      </Box>
    </div>
  );
};