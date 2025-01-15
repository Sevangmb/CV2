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
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  const timelineData = [
    { type: 'work', time: '9:30 am', title: 'Work', description: 'Start working on projects.' },
    { type: 'education', time: '10:00 am', title: 'Study', description: 'Learn new skills.' },
    { type: 'skills', time: '11:00 am', title: 'Practice', description: 'Hone your skills.' },
    { type: 'repeat', time: '12:00 pm', title: 'Repeat', description: 'Continue the cycle.' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <WorkIcon />;
      case 'education':
        return <SchoolIcon />;
      case 'skills':
        return <BuildIcon />;
      default:
        return <RepeatIcon />;
    }
  };

  return (
    <Timeline position="alternate">
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              {getIcon(item.type)}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}