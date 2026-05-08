export default function useSendMail() {
    const sendEmail = async (formData) => {
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  return { sendEmail };
}