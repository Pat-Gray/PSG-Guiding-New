import emailjs from 'emailjs-com';

export const createEmailHandler = (setFormData, setStatus) => {
  return (e, formData) => {
    e.preventDefault();
    setStatus('Sending...');
    console.log('Form submitted:', formData);

    emailjs.send(
      'service_o3vd634',
      'template_usv2jef',
      formData,
      'hXAjj4thBMxE7eg1W'
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setStatus('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setStatus('Failed to send email. Please try again.');
    });
  };
};