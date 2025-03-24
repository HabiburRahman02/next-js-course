import React from 'react'

export default function ReviewDetails({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    return (
        <div>Review Id: {params.reviewId} & Product ID: {params.productId}</div>
    )
}
