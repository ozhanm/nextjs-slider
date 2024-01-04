"use client";
import React from 'react';
import Link from 'next/link';

function Error() {
    return (
        <div className="error-page">
            <h1>An error occurred, check the code!</h1>
            <Link href="/">Go to Home</Link>
        </div>
    )
}

export default Error