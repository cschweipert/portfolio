export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 pb-0">
      <img 
        className="w-72 h-72 rounded-full mx-auto mb-8 object-cover" 
        src="/me.png" 
        alt="portrait of Christina Schweipert"
      />
      
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">From Earth Science to Data Engineering</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I found my way into data while working as an Earth Scientist, and eventually into engineering the systems that produce it. I now build the pipelines and models scientists rely on to answer questions about their own experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Data Engineering</h4>
            <p className="text-gray-600 leading-relaxed">
              I build the path from source system to trusted dataset: extraction and incremental loading, modeling with <span className="font-medium text-gray-800">dbt</span>, and the tests that catch a bad number before anyone reports it. Currently migrating a warehouse to <span className="font-medium text-gray-800">Snowflake</span>.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Building the Tools Too</h4>
            <p className="text-gray-600 leading-relaxed">
              I also build the systems the data comes from — <span className="font-medium text-gray-800">FastAPI</span> services, instrument integrations, and <span className="font-medium text-gray-800">React</span> interfaces scientists use daily. Working both ends means I usually know where a bad number came from.
            </p>
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-8 mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">My Mission</h4>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I like working on data that describes something physical and consequential — weather, ore, emissions — where getting the number right actually matters.
          </p>
        </div>

        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">When I'm Not Coding</h4>
          <p className="text-lg text-gray-700 leading-relaxed">
            You'll likely find me in the mountains on my <span className="font-medium text-gray-800">bicycle</span> or <span className="font-medium text-gray-800">backcountry skis</span> ⛷️ 🚵‍♀️
          </p>
        </div>

        <div className="text-center mt-8">
          <blockquote className="text-xl font-medium text-gray-600 italic">
            "Facts don't cease to exist because they are ignored."
          </blockquote>
          <p className="text-gray-500 mt-2">— Aldous Huxley</p>
        </div>
      </div>
    </div>
  )
}