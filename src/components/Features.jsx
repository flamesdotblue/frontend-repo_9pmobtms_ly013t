import { Shield, Video, Calendar, Bot, FileText } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'End‑to‑End Encryption',
    copy:
      "Private by design. Every call and message is encrypted in transit and at rest, with rigorous access controls.",
  },
  {
    icon: Video,
    title: 'Secure Video Consults',
    copy:
      "Crystal‑clear HD video with adaptive bandwidth and medical‑grade stability for every appointment.",
  },
  {
    icon: Calendar,
    title: 'Real‑Time Booking',
    copy:
      "Live availability, instant confirmations, and automated reminders reduce no‑shows and admin overhead.",
  },
  {
    icon: Bot,
    title: 'AI Symptom Checker',
    copy:
      "Structured intake that triages symptoms to the right pathway — saving minutes per consult.",
  },
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    copy:
      "Issue e‑prescriptions securely with audit trails and pharmacy hand‑off built in.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for trust. Engineered for care.</h2>
          <p className="mt-4 text-gray-300">
            Minimal, fast, and secure. Everything you need to move from waitlists to same‑day consults.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="group rounded-xl border border-gray-800 bg-gray-950/60 p-6 transition-colors hover:border-gray-600">
              <div className="mb-4 inline-flex items-center justify-center rounded-md bg-gray-900 p-3 text-gray-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{copy}</p>
            </div>
          ))}
        </div>

        {/* Subtle AI / connection hint */}
        <div className="mt-14 rounded-xl border border-gray-800 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-8">
          <p className="text-sm text-gray-300">
            A discreet pulse line animates across our connections, hinting at always‑on intelligence and instant handshakes between patient and clinician.
          </p>
          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full w-1/3 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
