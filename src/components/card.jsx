import React from 'react';
import { Card } from '@heroui/react';

function CardComponent({ children }) {
    return (
        <Card className='border-2 border-gray-300 shadow-md rounded-lg p-4 h-[600px] w-[500px] flex flex-col justify-between'>
            {children}
        </Card>
    );
}

export default CardComponent;