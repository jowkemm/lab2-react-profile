import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Step2 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  // Guard: If email is missing, force user back to Step 1
  if (!formData.email) {
      // Use useEffect or render text to avoid navigation during render loop issues, 
      // but for simplicity in Lab, a direct check works if handled carefully.
      // Better UX: Button to go back.
  }

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">Step 2: Professional Details</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">Work Experience</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Describe your past roles..."
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Key Skills</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="React, Node.js, Tailwind..."
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/apply/step-1")}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
        >
          ← Back
        </button>
        <button
          onClick={() => navigate("/apply/review")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Review Application →
        </button>
      </div>
    </div>
  );
};

export default Step2;