import { Users, BarChart, ShieldCheck, Rocket } from 'lucide-react';

const points = [
  {
    icon: Users,
    title: 'Expand Your Practice',
    copy: 'Reach new patients across regions with compliant telehealth — without adding overhead.',
  },
  {
    icon: BarChart,
    title: 'Operate Efficiently',
    copy: 'Automated scheduling, reminders, and intake reduce admin time by up to 40%.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust by Default',
    copy: 'Security, consent flows, and audit trails are built‑in — not bolted on.',
  },
  {
    icon: Rocket,
    title: 'Go Live Fast',
    copy: 'Spin up in days, not months. White‑label options available for groups.',
  },
];

export default function ForDoctors() {
  return (
    <section id="for-doctors" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-400">
              For Doctors & Clinics
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Grow your impact without growing your workload.
            </h2>
            <p className="mt-4 text-gray-300">
              Appoint'd brings bookings, consults, notes, and prescriptions into a single secure flow — so you can focus on care.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {points.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-lg border border-gray-800 bg-gray-950/60 p-4">
                  <div className="mb-2 inline-flex items-center gap-2 text-gray-100">
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{title}</span>
                  </div>
                  <p className="text-sm text-gray-300">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#home" className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-100 transition-colors">
                Book a Demo
              </a>
              <a href="#features" className="rounded-md border border-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:border-gray-500 transition-colors">
                View Capabilities
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-black font-bold">
                a
              </div>
              <div>
                <div className="text-white font-semibold">appoint'd</div>
                <div className="text-xs text-gray-400">Clinician Console — Snapshot</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
                <div className="text-xs text-gray-400">Today's consults</div>
                <div className="mt-2 text-2xl font-semibold">12</div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
                <div className="text-xs text-gray-400">Avg. waiting time</div>
                <div className="mt-2 text-2xl font-semibold">3m</div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
                <div className="text-xs text-gray-400">No‑show rate</div>
                <div className="mt-2 text-2xl font-semibold">1.2%</div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
                <div className="text-xs text-gray-400">E‑prescriptions</div>
                <div className="mt-2 text-2xl font-semibold">38</div>
              </div>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              Metrics shown for illustration; actual analytics available in the console.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
