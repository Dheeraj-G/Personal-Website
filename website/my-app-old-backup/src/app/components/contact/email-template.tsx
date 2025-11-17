import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message, email
}) => (
  <div>
    <p>Hello,<br></br>
        you have a new message from {email},<br></br>
        {message}</p>
  </div>
);
