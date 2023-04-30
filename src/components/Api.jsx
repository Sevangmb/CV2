import * as React from 'react';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Stack from '@mui/material/Stack';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const that = this;
    const apiUrl =
      'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/cv-xfzvw/service/cv/incoming_webhook/api?secret=cv';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        that.setState({ data: json });
      });
  }

  render() {
    const { data } = this.state;
    const result = (data || []).map((item, id) => (
      <div key={`api-${id}`}>
        <span># {id} # </span>
        <br />

        <span>Titre : {item.title}</span>
        <br />

        <span>Casting : {item.cast}</span>
        <br />

        {item.cast.map((castDetail, stackId) => (
          <Stack key={`api-${stackId}`} direction="row" spacing={1}>
            <Chip size="small" icon={<FaceIcon />} label={castDetail} variant="outlined" />
          </Stack>
        ))}

        <span key="{item.runtime.$numberInt}">Diffusé {item.runtime.$numberInt} fois</span>
      </div>
    ));
    return result;
  }
}
export default Api;
