/**
 * CustomizedTimeline is a React component that renders a timeline using Material-UI components.
 * It visually represents a sequence of events with icons and descriptions.
 */
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" sx={{ bgcolor: 'background.default', py: 4 }}>
      <TimelineItem>
        {/* Timeline item for the "Eat" event */}
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: '#00796b' }}
          align="right"
          variant="body2"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: 2, px: 3 }}>
          <Typography variant="h5" component="span" color="primary">
            Eat
          </Typography>
          <Typography variant="body1" color="text.secondary">Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {/* Timeline item for the "Code" event */}
        <TimelineOppositeContent sx={{ m: 'auto 0', color: 'text.secondary' }} align="right" variant="body2">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: 2, px: 3 }}>
          <Typography variant="h5" component="span" color="primary">
            Code
          </Typography>
          <Typography variant="body1" color="text.secondary">Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {/* Timeline item for the "Sleep" event */}
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: 2, px: 3 }}>
          <Typography variant="h5" component="span" color="primary">
            Sleep
          </Typography>
          <Typography variant="body1" color="text.secondary">Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {/* Timeline item for the "Repeat" event */}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: 2, px: 3 }}>
          <Typography variant="h5" component="span" color="primary">
            Repeat
          </Typography>
          <Typography variant="body1" color="text.secondary">Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}