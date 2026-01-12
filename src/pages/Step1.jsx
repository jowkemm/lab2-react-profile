import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    // Simple Validation
    if (!formData.firstName || !formData.email) {
      alert("Please fill in your name and email.");
      return;
    }
    navigate("/apply/step-2");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">Step 1: Personal Info</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="john@example.com"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
};

export default Step1;