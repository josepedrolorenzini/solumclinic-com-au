import React from 'react';

export default function ProjectSummaryCard() {
  return (
    <div className="w-full min-h-80 flex justify-start items-center p-4">
      <div className="relative flex flex-col    border-gray-600 rounded-lg w-full max-w-md">
        <div className="p-6">
          <b className="text-white leading-normal font-light mb-4 block">
            My technical test project includes:
          </b>

              <div className="p-2">
            <p className="text-cyan-500 text-sm">
              • React app (<code className="bg-gray-700 text-white px-1 rounded">C/</code>) with Vite, Tailwind CSS, Material Tailwind, and React Router
            </p>
            <p className="text-cyan-500 text-sm">
              • Java programs (<code className="bg-gray-700 text-white px-1 rounded">A/</code> and <code className="bg-gray-700 text-white px-1 rounded">B/</code>) including the MysticWaves and CargoCraftFleet solutions
            </p>
            <p className="text-cyan-500 text-sm">
              • Documentation in <code className="bg-gray-700 text-white px-1 rounded">C/README.md</code> covering setup, scripts, and troubleshooting
            </p>
          </div>

          <div className="m-14-4  border-gray-600">
            <ul>
                
            <li className="text-cyan-500 text-sm">
            Frontend with modern React stack (Vite, Tailwind, Material UI components)
            </li>
            <li className="text-cyan-500 text-sm">
            Login form with user authentication logic
            </li>
            <li className="text-cyan-500 text-sm">
              Responsive design with Tailwind utilities
            </li>
            <li className="text-cyan-500 text-sm">
              Java competitive programming solutions with proper error handling
            </li>
            <li className="text-cyan-500 text-sm">
            Git workflow with clean commits and <code className="bg-gray-700 text-white px-1 rounded">.gitignore</code>
            </li>
            </ul>
          </div>

      
        </div>
      </div>
    </div>
  );
}