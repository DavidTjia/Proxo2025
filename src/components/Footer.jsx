import React from "react";
import logopx from "@/assets/proxo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Grid layout for sections */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <img src={logopx} alt="Logo" className="mb-4 h-16" />
            <h2 className="text-xl font-bold">Proxo x Coris</h2>
            <p className="mt-2 text-gray-400">
              "Great ideas can come from anyone, anywhere. It's about creating
              an environment where those ideas can flourish."
              <br />
              <br />
              --Jensen Huang
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Sosial Media</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/proxocoris?igsh=MTgyNXF4dHNwbXp1ag== "
                  className="hover:text-white"
                >
                  <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 2500 2500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        id="0"
                        cx="332.14"
                        cy="2511.81"
                        r="3263.54"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".09" stop-color="#fa8f21" />
                        <stop offset=".78" stop-color="#d82d7e" />
                      </radialGradient>
                      <radialGradient
                        id="1"
                        cx="1516.14"
                        cy="2623.81"
                        r="2572.12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".64"
                          stop-color="#8c3aaa"
                          stop-opacity="0"
                        />
                        <stop offset="1" stop-color="#8c3aaa" />
                      </radialGradient>
                    </defs>
                    <path
                      d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                      fill="url(#0)"
                    />
                    <path
                      d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                      fill="url(#1)"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>

            <div className="text-gray-400">
              <span>Email: </span>
              <a
                href="mailto:ProxoCoris.unklab@gmail.com"
                className="text-blue-600 hover:text-white"
                target="_blank"
              >
                ProxoCoris.unklab@gmail.com
              </a>
            </div>

            <div className="text-gray-400">
              <span>
                WhatsApp contact for competition participation needs:{" "}
              </span>
              <a
                href="https://wa.me/+6283197341044"
                className="text-blue-600 hover:text-white"
                target="_blank"
              >
                +6283197341044 (Admin)
              </a>
            </div>

            <div className="text-gray-400">
              <span>
                WhatsApp contact for sponsorship/partnership inquiries:{" "}
              </span>
              <br></br>
              <a
                href="https://wa.me/+6285757345675"
                className="text-blue-600 hover:text-white"
                target="_blank"
              >
                +6285757345675 (Aiko)
              </a>
              <br></br>
              <a
                href="https://wa.me/+6281241988202"
                className="text-blue-600 hover:text-white"
                target="_blank"
              >
                +6281241988202 (Ralf)
              </a>
            </div>

            <div className="text-gray-400">
              <span>Address: </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.+Arnold+Mononutu,+Airmadidi+Bawah,+Kec.+Airmadidi,+Kabupaten+Minahasa+Utara,+Sulawesi+Utara+95371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-white"
              >
                Jl. Arnold Mononutu, Airmadidi Bawah, Kec. Airmadidi, Kabupaten
                Minahasa Utara, Sulawesi Utara 95371
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;