const { useState } = React;

const App = () => {
  // Fail-safe for icons: tries both 'lucide' and 'Lucide'
  const lucideIcons = window.lucide || window.Lucide;
  const { User, Plus, Share2, Settings, Heart, Bell } = lucideIcons || {};

  const [children, setChildren] = useState([
    { id: 1, name: "Leo", balance: 450, goal: 500, color: "#3b82f6" },
    { id: 2, name: "Maya", balance: 280, goal: 1000, color: "#a855f7" },
    { id: 3, name: "Sam", balance: 850, goal: 900, color: "#22c55e" }
  ]);

  const addFunds = (id, amount) => {
    setChildren(children.map(child => {
      if (child.id === id) {
        return { ...child, balance: Math.min(child.balance + amount, child.goal) };
      }
      return child;
    }));
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-extrabold text-blue-600">FundIt</h1>
          <div className="flex gap-2 text-gray-400">
            {Settings && <Settings size={24} />}
          </div>
        </div>

        <div className="grid gap-6">
          {children.map(child => {
            const percentage = Math.round((child.balance / child.goal) * 100);
            return (
              <div key={child.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-50 text-gray-600">
                      {User && <User size={24} />}
                    </div>
                    <h3 className="text-xl font-bold">{child.name}'s Goal</h3>
                  </div>
                  <div className="text-right font-bold">
                    ${child.balance} <span className="text-gray-400 font-normal">/ ${child.goal}</span>
                  </div>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-3 mb-6">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%`, backgroundColor: child.color }}
                  ></div>
                </div>

                <button 
                  onClick={() => addFunds(child.id, 10)}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 active:scale-95 transition-all"
                >
                  + Add $10
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};