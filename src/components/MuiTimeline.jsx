import react from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/joy";
import HotelIcon from "@mui/icons-material/Hotel";

export const MuiTimeline = () => {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography>Depuis 2021</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>AXESS ONLINE</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography>2020 -2021</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>APE CONSEIL</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography>2019 - 2020</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>TEREVA</TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
          <Typography>2019 - 2020</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>TEREVA</TimelineContent>
      </TimelineItem>
      
      
    </Timeline>

    
  );
};
