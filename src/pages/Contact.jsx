const Contact = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600"
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea 
            rows="4"
            className="w-full p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button 
          type="button"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;