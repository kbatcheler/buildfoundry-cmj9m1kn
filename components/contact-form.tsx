import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted!');
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" />
      <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full p-2 border"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
}