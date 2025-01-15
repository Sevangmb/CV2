import Api from '../components/Api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Expenses() {
  return (
    <Card sx={{ padding: '1rem 0', marginBottom: 2 }}>
      <CardContent>
        <h2>
          <Api />
        </h2>
      </CardContent>
    </Card>
  );
}