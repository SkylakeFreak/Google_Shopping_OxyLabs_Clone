import React from 'react'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-600">
                    The requested page could not be found on the server. Its possible that the site is not active at the moment due to <span className="text-red-500 font-semibold">QUOTA EXCEEDED</span> for web scraper API usage.
                </p>
                <p className="text-gray-600 mt-2">
                    Please check back later or contact the site administrator(Utkarsh Barde) @(Utkarshbarde2@gmail.com) for more information.
                </p>
            </div>
        </div>
    );
};

export default NotFound;