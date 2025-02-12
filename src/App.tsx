import React, { useState } from 'react';
import { Flame, Droplets, Mountain, Wind, Sparkles, Book, Scroll, Code, Boxes, Workflow, Wand2, Compass, Lightbulb, Gem } from 'lucide-react';

type Element = 'fire' | 'water' | 'earth' | 'air';
type Tab = 'journey' | 'grimoire' | 'mods' | 'wiki';

function App() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [playerStatus, setPlayerStatus] = useState('Begin your alchemical journey...');
  const [activeTab, setActiveTab] = useState<Tab>('journey');
  const [power, setPower] = useState(0);

  const handleElementSelect = (element: Element) => {
    setSelectedElement(element);
    const messages = {
      fire: 'The flame of transformation burns within you. Your journey of willpower begins.',
      water: 'You flow like water, adapting and healing. Your journey of emotion begins.',
      earth: 'Grounded in wisdom, you stand firm. Your journey of stability begins.',
      air: 'Free as the wind, your mind soars. Your journey of intellect begins.'
    };
    setPlayerStatus(messages[element]);
    setPower(prev => prev + 10);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'grimoire':
        return (
          <div className="space-y-6">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                Ancient Knowledge
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Elemental Mastery</h3>
                  <p className="text-gray-300">Learn the secrets of the four elements and their transformative powers.</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Alchemical Formulas</h3>
                  <p className="text-gray-300">Discover ancient recipes for spiritual and material transformation.</p>
                </div>
              </div>
            </section>
          </div>
        );
      case 'mods':
        return (
          <div className="space-y-6">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Mod Workshop
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Custom Elements</h3>
                  <p className="text-gray-300">Create and share your own elemental combinations.</p>
                  <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                    Create Mod
                  </button>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Community Mods</h3>
                  <p className="text-gray-300">Explore mods created by other alchemists.</p>
                  <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                    Browse Mods
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
      case 'wiki':
        return (
          <div className="space-y-6">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Book className="w-5 h-5" />
                Knowledge Base
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Getting Started</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Basic Controls</li>
                    <li>• Element Selection</li>
                    <li>• Power Management</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Advanced Techniques</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Element Combinations</li>
                    <li>• Energy Manipulation</li>
                    <li>• Ritual Casting</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold mb-2">API Documentation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• SDK Reference</li>
                    <li>• Mod Development</li>
                    <li>• Web3 Integration</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            {/* Player Status */}
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Your Path</h2>
              <p className="text-gray-300">{playerStatus}</p>
              <div className="mt-4 bg-gray-800/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Power Level</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${power}%` }}
                  />
                </div>
              </div>
            </section>

            {/* Elemental Selection */}
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Choose Your Element</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button
                  onClick={() => handleElementSelect('fire')}
                  className={`p-6 rounded-lg flex flex-col items-center gap-3 transition-all ${
                    selectedElement === 'fire'
                      ? 'bg-red-600 shadow-lg shadow-red-600/50'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <Flame className="w-8 h-8 text-orange-400" />
                  <span>Fire (Willpower)</span>
                </button>

                <button
                  onClick={() => handleElementSelect('water')}
                  className={`p-6 rounded-lg flex flex-col items-center gap-3 transition-all ${
                    selectedElement === 'water'
                      ? 'bg-blue-600 shadow-lg shadow-blue-600/50'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <Droplets className="w-8 h-8 text-blue-400" />
                  <span>Water (Flow)</span>
                </button>

                <button
                  onClick={() => handleElementSelect('earth')}
                  className={`p-6 rounded-lg flex flex-col items-center gap-3 transition-all ${
                    selectedElement === 'earth'
                      ? 'bg-green-600 shadow-lg shadow-green-600/50'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <Mountain className="w-8 h-8 text-green-400" />
                  <span>Earth (Stability)</span>
                </button>

                <button
                  onClick={() => handleElementSelect('air')}
                  className={`p-6 rounded-lg flex flex-col items-center gap-3 transition-all ${
                    selectedElement === 'air'
                      ? 'bg-cyan-600 shadow-lg shadow-cyan-600/50'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <Wind className="w-8 h-8 text-cyan-400" />
                  <span>Air (Intellect)</span>
                </button>
              </div>
            </section>

            {/* Tools & Activation */}
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Mystical Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button className="p-4 bg-gray-800/50 rounded-lg flex flex-col items-center gap-2 hover:bg-gray-700/50 transition-colors">
                  <Wand2 className="w-6 h-6 text-purple-400" />
                  <span>Rituals</span>
                </button>
                <button className="p-4 bg-gray-800/50 rounded-lg flex flex-col items-center gap-2 hover:bg-gray-700/50 transition-colors">
                  <Compass className="w-6 h-6 text-purple-400" />
                  <span>Navigation</span>
                </button>
                <button className="p-4 bg-gray-800/50 rounded-lg flex flex-col items-center gap-2 hover:bg-gray-700/50 transition-colors">
                  <Lightbulb className="w-6 h-6 text-purple-400" />
                  <span>Insights</span>
                </button>
                <button className="p-4 bg-gray-800/50 rounded-lg flex flex-col items-center gap-2 hover:bg-gray-700/50 transition-colors">
                  <Gem className="w-6 h-6 text-purple-400" />
                  <span>Artifacts</span>
                </button>
              </div>
            </section>

            {/* AI Simulation */}
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">AI-Driven Reality Simulation</h2>
              <p className="text-gray-300">
                The AI will generate personalized quests and challenges based on your elemental affinity,
                guiding your transformation through the mystical realms.
              </p>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <header className="p-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <h1 className="text-2xl font-bold">The Alchemist's Journey</h1>
          </div>
          <nav className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'journey' ? 'bg-purple-600' : 'hover:bg-gray-800'
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>Journey</span>
            </button>
            <button
              onClick={() => setActiveTab('grimoire')}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'grimoire' ? 'bg-purple-600' : 'hover:bg-gray-800'
              }`}
            >
              <Book className="w-4 h-4" />
              <span>Grimoire</span>
            </button>
            <button
              onClick={() => setActiveTab('mods')}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'mods' ? 'bg-purple-600' : 'hover:bg-gray-800'
              }`}
            >
              <Boxes className="w-4 h-4" />
              <span>Mods</span>
            </button>
            <button
              onClick={() => setActiveTab('wiki')}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'wiki' ? 'bg-purple-600' : 'hover:bg-gray-800'
              }`}
            >
              <Scroll className="w-4 h-4" />
              <span>Wiki</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;