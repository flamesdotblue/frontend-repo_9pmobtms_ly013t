import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative bg-black text-white">
      <div className="relative h-[88vh] w-full">
        {/* 3D Spline Background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Dark gradient overlay to improve contrast over the 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-300">Secure Telehealth Platform</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              STOP WAITING. START CONSULTING.
            </h1>
            <p className="mt-5 text-gray-300">
              Appoint'd connects patients and clinicians instantly with end-to-end encrypted video, real-time bookings, and intelligent triage. Built for trust. Designed for speed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3" id="cta">
              <a
                href="#features"
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
              >
                Explore Features
              </a>
              <a
                href="#for-doctors"
                className="rounded-md border border-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:border-gray-500 transition-colors"
              >
                For Doctors
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              HIPAA-ready • ISO 27001 practices • Zero patient data on device
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
