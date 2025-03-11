import React from "react";
const CheckEmail = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Verify Email
        </h2>
        <p className="text-center">
          We have send you confirmation into your <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">email</a>.
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;
