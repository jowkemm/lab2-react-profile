import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Review = () => {
  const navigate = useNavigate();
  const { formData, resetForm } = useFormStore();

  const handleSubmit = () => {
    alert("Application Submitted Successfully!");
    resetForm(); // Clear data
    navigate("/apply/step-1"); // Restart
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Review Your Application</h3>
      
      <div className="grid grid-cols-1 gap-4 text-sm">
        <div className="bg-gray-50 p-4 rounded border">
          <h4 className="font-bold text-gray-600 mb-2">Personal Information</h4>
          <p><span className="font-semibold">Name:</span> {formData.firstName} {formData.lastName}</p>
          <p><span className="font-semibold">Email:</span> {formData.email}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded border">
          <h4 className="font-bold text-gray-600 mb-2">Professional Details</h4>
          <p className="mb-2"><span className="font-semibold">Skills:</span> {formData.skills || "-"}</p>
          <p><span className="font-semibold">Experience:</span></p>
          <p className="whitespace-pre-wrap text-gray-600 mt-1">{formData.experience || "No experience added."}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/apply/step-2")}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
        >
          ← Edit Details
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition shadow-md"
        >
          Confirm & Submit ✅
        </button>
      </div>
    </div>
  );
};

export default Review;