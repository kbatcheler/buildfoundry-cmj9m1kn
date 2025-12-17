import ContactForm from '../../components/contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">Have questions? Get in touch with us using the form below.</p>
      <ContactForm />
    </div>
  );
}