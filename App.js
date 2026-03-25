// 1. Grab the "tools" from the libraries we linked in index.html
const { useState } = React;
const { User, Plus, Share2, Settings, ChevronRight, Activity, DollarSign, Heart, Bell } = Lucide;

const App = () => {
  // 2. State: This is the "brain" of your app holding the child data
  const [children, setChildren] = useState([
    { id: 1, name: "Leo", balance: 450, goal: 500, color: "blue", icon: "User" },
    { id: 2, name: "Maya", balance: 280, goal: 1000, color: "purple", icon: "Heart" },
    { id: 3, name: "Sam", balance: 850, goal: 900, color: "green", icon: "Activity" }
  ]);

  // 3. Logic: This function updates the balance when a button is clicked
  const addFunds = (id, amount) => {
    setChildren(children.map(child => {
      if (child.id === id) {
        return { ...child, balance: Math.min(child.balance + amount, child.goal) };
      }
      return child;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-600">FundIt</h1>
            <p className="text-gray-500 text-sm font-medium">Family Savings Dashboard</p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="text-gray-400" size={24} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Settings className="text-gray-400" size={24} />
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {children.map(child => {
            const percentage = Math.round((child.balance / child.goal) * 100);
            
            return (
              <div key={child.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-${child.color}-50 text-${child.color}-600`}>
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{child.name}'s Goal</h3>
                      <p className="text-sm text-gray-500">Savings Target</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">${child.balance}</span>
                    <span className="text-gray-400 font-medium ml-1">/ ${child.goal}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-gray-600">{percentage}% Reached</span>
                    <span className="text-gray-400">${child.goal - child.balance} to go</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: child.color === 'blue' ? '#3b82f6' : child.color === 'purple' ? '#a855f7' : '#22c55e'
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => addFunds(child.id, 10)}
                    className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 active:scale-95 transition-all"
                  >
                    <Plus size={18} /> Add $10
                  </button>
                  <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <Share2 size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button className="w-full mt-8 border-2 border-dashed border-gray-300 py-6 rounded-2xl text-gray-400 font-bold flex flex-col items-center justify-center gap-2 hover:border-blue-400 hover:text-blue-500 transition-all group">
          <div className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50">
            <Plus size={32} />
          </div>
          Add New Child Profile
        </button>

      </div>
    </div>
  );
};

// IMPORTANT: No 'export default App' line here!