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
  const resumeData = [
    {
      type: 'work',
      date: 'Jan 2020 - Present',
      title: 'Software Engineer',
      description: 'Developing web applications.',
    },
    {
      type: 'education',
      date: '2015 - 2019',
      title: 'Bachelor of Science',
      description: 'Major in Computer Science.',
    },
    {
      type: 'skills',
      date: '',
      title: 'Skills',
      description: 'JavaScript, React, Node.js',
    },
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
      {resumeData.map((item) => (
        <TimelineItem key={item.title}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
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