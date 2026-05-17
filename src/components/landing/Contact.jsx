import { Mail, Phone, MapPin } from "lucide-react"

function Contact() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-400">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition">
            <Mail className="text-purple-500 mb-4" size={40} />

            <h3 className="text-2xl font-bold mb-2">
              Email
            </h3>

            <p className="text-gray-400">
              support@fittrack.com
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition">
            <Phone className="text-purple-500 mb-4" size={40} />

            <h3 className="text-2xl font-bold mb-2">
              Phone
            </h3>

            <p className="text-gray-400">
              +91 9876543210
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition">
            <MapPin className="text-purple-500 mb-4" size={40} />

            <h3 className="text-2xl font-bold mb-2">
              Location
            </h3>

            <p className="text-gray-400">
              Hyderabad, India
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact