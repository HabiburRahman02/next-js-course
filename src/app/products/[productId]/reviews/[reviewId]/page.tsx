import { notFound } from 'next/navigation';
import React from 'react'

export default function ReviewDetails({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    if(parseInt(params.reviewId) > 10){
        console.log('err khia geso');
        notFound()
    }
    console.log('params from review details page',params.reviewId);
    return (
        <div>Review Id: {params.reviewId} & Product ID: {params.
        productId}</div>
    )
}
