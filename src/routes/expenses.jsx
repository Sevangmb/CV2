import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Api from '../components/Api';

export default function Expenses() {
  return (
    <Card sx={{ padding: '1rem 0', marginBottom: 2 }}>
      <CardContent>
        <Api />
      </CardContent>
    </Card>
  );
}