import { useRouter } from 'next/router';

export const SuccessPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/form');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="success-message">
          Your recipe has been successfully submitted!
        </div>
        <button
          className="mt-4 mr-4 px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-blue-600"
          onClick={handleGoBack}
        >
          Turn Back
        </button>
        <button
          className="mt-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-gray-600"
          onClick={handleGoHome}
        >
          Let's Go Home
        </button>
      </div>
    </div>
  )
};
