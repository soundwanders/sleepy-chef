import React from 'react';
import { useRouter } from 'next/router';

export const SuccessPage = ({ resetForm }) => {
  const router = useRouter();

  const handleGoBack = () => {
    resetForm();
    router.push('/form');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="flex justify-center items-start h-screen pt-8">
      <div className="text-center -mt-20 md:mt-0 p-8">
        <div className="success-message text-xl mb-3">
          Your recipe has been successfully submitted! Thank you for contributing to Sleepy Chef.
        </div>
        <button
          className="mt-4 mr-4 px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
          onClick={handleGoBack}
        >
          Turn Back
        </button>
        <button
          className="mt-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-600"
          onClick={handleGoHome}
        >
          Let's Go Home
        </button>
      </div>
    </div>
  )
};
