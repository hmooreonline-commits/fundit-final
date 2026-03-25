const { useState, useEffect } = React;
const { User, Plus, Share2, Settings, ChevronRight, Activity, DollarSign } = Lucide;

const App = () => {
  // Mock Data for your Business MVP
  const [children] = useState([
    { id: 1, name: "Leo", balance: 450, goal: 500, color: "blue" },
    { id: 2, name: "Maya", balance: 280, goal: 1000, color: "purple" },
    { id: 3, name: "Sam", balance: 850, goal: 900, color: "green" }
  ]);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">FundIt</h1>
          <Settings className="text-gray-400" />
        </div>

        {children.map(child => (
          <div key={child.id} className="mb-6 p-4 border rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{child.name}</span>
              <span className="text-sm text-gray-500">${child.balance} / ${child.goal}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`bg-${child.color}-500 h-2.5 rounded-full`} 
                style={{ width: `${(child.balance / child.goal) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
          <Plus size={20} /> Add New Goal
        </button>
      </div>
    </div>
  );
};