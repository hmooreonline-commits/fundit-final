const { useState } = React;
const { User, Plus, Share2, Settings, ChevronRight, Activity } = Lucide;

// This is the code you just shared!
const MultiChildDashboard = () => {
  const [activeChildIndex, setActiveChildIndex] = useState(0);

  const household = [
    { name: "Leo", color: "border-blue-500 text-blue-600 bg-blue-50", emoji: "⚽", links: 3 },
    { name: "Maya", color: "border-purple-500 text-purple-600 bg-purple-50", emoji: "🎷", links: 2 },
    { name: "Sam", color: "border-green-500 text-green-600 bg-green-50", emoji: "🤸", links: 1 }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <header className="bg-white p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-black italic tracking-tighter text-indigo-600">FundIt</h1>
        <div className="flex gap-3">
          <button className="p-2 bg-slate-100 rounded-full text-slate-500"><Settings size={20} /></button>
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-400">P</div>
        </div>
      </header>

      <div className="p-6 bg-white shadow-sm mb-6">
        <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">Select Child</p>
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {household.map((child, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveChildIndex(idx)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl border-2 transition-all ${
                activeChildIndex === idx 
                ? `${child.color} shadow-md scale-105` 
                : 'border-slate-100 text-slate-400 grayscale opacity-60'
              }`}
            >
              <span className="text-xl">{child.emoji}</span>
              <span className="font-bold">{child.name}</span>
            </button>
          ))}
          <button className="flex-shrink-0 w-12 h-12 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <main className="px-6 space-y-6">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 text-slate-50 opacity-10">
            <Activity size={200} />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-1">
              {household[activeChildIndex].name}'s Drive
            </h2>
            <p className="text-slate-500 mb-6 font-medium">
              Currently running <span className="text-indigo-600 font-bold">{household[activeChildIndex].links} fundraisers</span>
            </p>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                <Plus size={18} /> Add Link
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-600 p-4 rounded-2xl flex items-center justify-center">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Active Links</h3>
          <div className="bg-white rounded-3xl p-2 border border-slate-100">
            <div className="p-4 flex items-center justify-between hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl">🍿</div>
                <div>
                  <p className="font-black text-slate-800">Gourmet Popcorn</p>
                  <p className="text-xs text-slate-400">Ends in 4 days</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-600" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};