import React from 'react'

export default function ReviewDetails({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {

    return (
        <div>ReviewDetails {params.reviewId}</div>
    )
}
