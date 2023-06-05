import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { EditButton } from './CardIcons';

export default function CardComponent({
    title,
    phoneNumber,
    emergencyNumber,
    postAddress,
    email

}) {
    return (
        <Card sx={{ width: '100%', borderRadius: '1rem', position: 'relative' }}>

            <CardHeader title={title}>

            </CardHeader>
            <CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', }}>

                <Typography variant="body2" color="text.secondary">
                    {phoneNumber || ''}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {emergencyNumber || ''}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {postAddress || ''}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {email || ''}
                </Typography>
            </CardContent>
            <CardActions sx={{
                position: 'absolute',
                top: '1rem',
                right: '2.5rem',
                width: '2rem',
                height: '2rem'
            }}>
                <Button size="small"><EditButton /></Button>
            </CardActions>
        </Card>
    );
}
