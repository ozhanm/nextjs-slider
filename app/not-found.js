import React from 'react';
import Link from 'next/link';

function NotFound() {
    return (
        <div className="error-page">
            <h1>404 - Page not found!</h1>
            <Link href="/">Go to Home</Link>
        </div>
    )
}

export default NotFound