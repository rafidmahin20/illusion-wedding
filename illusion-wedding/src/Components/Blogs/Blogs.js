import React from 'react';

const Blogs = () => {
    return (
        <div>
           <h1 className='text-center text-4xl font-sans font-bold text-cyan-700'>Questions & Answers</h1>
           <section className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-2'>
                <div className='h-full grid grid-cols-1 gap-20 md:grid-cols-2 '>
                    <div>
                        <h1 className='text-2xl font-sans font-bold'> Difference between authorization and authentication</h1>
                        <p className='text-xl font-sans font-medium'>
                            -Authentication is the process of verifying who you are when you log on to a pc with a user name and password you are authenticating. Authorization means verifying the user is avalid user with username and password. Authorization is a process of verifying that you have access to something gaining access to a resource. Authentication confirms identity to grant access to system. Authorization validate whether user is a authorize to access resource.
                            
                        </p>
                        <br/><br/>
                        <h1 className='text-2xl font-sans font-bold'>  What other services does firebase provide other than authentication</h1>
                        <p className='text-xl font-sans font-medium'>
                           - There are many services firebase provides. Such as-
                           1.Cloud Firestore.
                           2.Cloud Functions.
                           3.Hosting.
                           4.Cloud Storage.
                           5.Google Analytics.
                           6.Cloud Messaging.     
                        </p>
                    </div>
                    <div>
                    <h1 className='text-2xl font-sans font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className='text-xl font-sans font-medium'>
                        - It is simple to use and integrate and its is cloud hosted too. NoSQL databasees on firbase. It has real time support and offline support. It has json like file supports. There are other options for authentication like password-based authentication multi-factor authentication, certificate-nased authentication.
                    </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;