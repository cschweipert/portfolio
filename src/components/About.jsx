export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 pb-0">
      <img 
        className="w-72 h-72 rounded-full mx-auto mb-8 object-cover shadow-lg" 
        src="/me.png" 
        alt="portrait of Christina Schweipert"
      />
      <p className="text-center text-lg text-gray-700 mb-6 leading-relaxed">
        I am a developer with a background in Geoecology. I am passionate about mountain biking, surfing, and programming.
        When I am not out and about in search of tacky dirt or the perfect wave I like to find innovative solutions with state of the art technology.
      </p>
      <p className="text-center text-xl font-medium text-gray-600 italic">
        "Facts don't cease to exist because they are ignored." - Aldous Huxley
      </p>
    </div>
  )
}