import * as React from 'react';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Stack from '@mui/material/Stack';
import connectDB from '../dbConfig';
import ResumeModel from '../models/ResumeModel.js';

// The Api component fetches data from a remote API and displays it using Material-UI components.

class Api extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with a data property set to null.
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    // Fetch data from the API when the component mounts.
    connectDB();
    const that = this;
    const apiUrl =
      'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/cv-xfzvw/service/cv/incoming_webhook/api?secret=cv';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        // Update the state with the fetched data.
        that.setState({ data: json });
        json.forEach(async (item) => {
          const resume = new ResumeModel({
            title: item.title,
            cast: item.cast,
            runtime: item.runtime.$numberInt,
          });
          try {
            await resume.save();
          } catch (error) {
        });
      });
  }

  render() {
    const { data } = this.state;
    // Map over the data array and render each item.
    const result = (data || []).map((item) => (
      <div key={`api-${item.id}`}>
        <span># {item.id} # </span>
        <br />
        {item.cast.map((castDetail) => (
          <Stack key={`api-${item.id}-${castDetail}`} direction="row" spacing={1}>
            <Chip size="small" icon={<FaceIcon />} label={castDetail} variant="outlined" />
          </Stack>
        ))}
      </div>
    ));
    return result;
  }
}
export default Api;
