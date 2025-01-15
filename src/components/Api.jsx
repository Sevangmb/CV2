import * as React from 'react';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Stack from '@mui/material/Stack';
import connectDB from '../dbConfig';
import ResumeModel from '../models/ResumeModel.js';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    connectDB();
    const apiUrl =
      'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/cv-xfzvw/service/cv/incoming_webhook/api?secret=cv';
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      this.setState({ data: json });
      json.forEach(async (item) => {
        const resume = new ResumeModel({
          title: item.title,
          cast: item.cast,
          runtime: item.runtime.$numberInt,
        });
        try {
          await resume.save();
        } catch (error) {
          console.error('Error saving resume:', error);
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { data } = this.state;
    const result = (data || []).map((item) => (
      <div key={`api-${item.title}`}>
        <span># {item.title} # </span>
        <br />
        {item.cast.map((castDetail) => (
          <Stack key={`api-${item.title}-${castDetail}`} direction="row" spacing={1}>
            <Chip size="small" icon={<FaceIcon />} label={castDetail} variant="outlined" />
          </Stack>
        ))}
      </div>
    ));
    return result;
  }
}
export default Api;