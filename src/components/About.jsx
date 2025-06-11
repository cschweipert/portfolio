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
          <h3 className="text-2xl font-bold text-gray-800 mb-4">From Earth Science to Software Engineering</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I discovered my fascination with data during my journey as an Earth Scientist. This passion led me to transition into software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Technical Focus</h4>
            <p className="text-gray-600 leading-relaxed">
              I focus on developing internal APIs with <span className="font-medium text-gray-800">FastAPI</span> and <span className="font-medium text-gray-800">Flask</span>, improving data quality and accessibility. My work often involves organizing and cleaning data with <span className="font-medium text-gray-800">Pandas</span>, ensuring it's accessible for decision-making.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Full-Stack Development</h4>
            <p className="text-gray-600 leading-relaxed">
              I've gained extensive experience in front-end development using <span className="font-medium text-gray-800">React</span>, creating user-friendly applications that bridge the gap between complex data and intuitive user experiences.
            </p>
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-8 mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">My Mission</h4>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            My journey has been about merging my scientific understanding with software engineering to tackle complex data challenges effectively.
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