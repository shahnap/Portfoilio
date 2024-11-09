import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaBootstrap ,FaDownload} from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiRedux } from 'react-icons/si';
import resume from '../../images/shahnap.pdf'

function Resume() {
  return (
    <div className="container mx-auto p-6">
        <div className='flex justify-end'> <a href={resume} download>
        <FaDownload className="text-2xl cursor-pointer" />
      </a></div>
      {/* Objective Section */}
      <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <h2 className="text-2xl font-bold mb-2">Objective</h2>
        <p className="text-lg">
          Skilled <strong>MERN Stack Developer</strong> with 1 year of experience, complemented by expertise in 
          <strong> Node.js, MongoDB, Next.js, Bootstrap, Tailwind CSS,</strong> and <strong>Redux</strong>, dedicated to 
          creating high-quality web applications and enhancing user experiences.
        </p>
      </section>
      {/* Education Section */}
      <section className="mb-8">
  <h2 className="text-3xl font-bold mb-4">Education</h2>
  <div className="space-y-4">
    <div className="bg-[#162c6f] p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
      <p className="text-gray-200">IGNOU University (Distance Education)</p>
      <p className="text-gray-200">January 2024 - Present (Currently Pursuing)</p>
    </div>
    <div className="bg-[#162c6f] p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold">MERN Stack Course</h3>
      <p className="text-gray-200">Techminds Infopark</p>
      <p className="text-gray-200">June 2023 - August 2023</p>
    </div>
    <div className="bg-[#162c6f] p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
      <p className="text-gray-200">MES Kalladi College, Mannarkkad</p>
      <p className="text-gray-200">August 2020 - April 2023</p>
    </div>
    <div className="bg-[#162c6f] p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold">Higher Secondary Education</h3>
      <p className="text-gray-200">Kalladi HSS, Kumarapuram</p>
      <p className="text-gray-200">July 2018 - March 2020</p>
    </div>
  </div>
</section>



      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>

        {/* Tech Skills */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <FaHtml5 size={30} className="text-orange-500 " />
              <span>HTML5</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <FaCss3Alt size={30} className="text-blue-500" />
              <span>CSS3</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <FaJs size={30} className="text-yellow-400" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <FaReact size={30} className="text-cyan-500" />
              <span>React.js</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <FaNodeJs size={30} className="text-green-600" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <SiMongodb size={30} className="text-green-500" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <SiNextdotjs size={30} className="text-gray-800" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <FaBootstrap size={30} className="text-purple-600" />
              <span>Bootstrap</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <SiTailwindcss size={30} className="text-blue-400" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <SiRedux size={30} className="text-purple-700" />
              <span>Redux</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#162c6f]w rounded p-1">
              <FaGit size={30} className="text-orange-600" />
              <span>Git</span>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Communication:</strong> Clear, concise, and effective communication across teams.</li>
            <li><strong>Collaboration:</strong> Experienced in working collaboratively with cross-functional teams.</li>
            <li><strong>Team Player:</strong> Strong advocate for teamwork, ensuring project success.</li>
            <li><strong>Problem Solving:</strong> Skilled in identifying and resolving technical challenges.</li>
            <li><strong>Adaptability:</strong> Quickly adjusts to new tools, languages, and work environments.</li>
          </ul>
        </div>
      </section>

      {/* Languages Section */}
      <section className="mb-8">
  <h2 className="text-3xl font-bold mb-4">Languages</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="flex flex-col items-start space-y-2">
      <span className="font-semibold">Malayalam:</span>
      <div className="w-full h-4 bg-green-500" style={{ width: '90%' }} />
      <span>Fluent</span>
    </div>
    <div className="flex flex-col items-start space-y-2">
      <span className="font-semibold">English:</span>
      <div className="w-full h-4 bg-yellow-500" style={{ width: '75%' }} />
      <span>Good</span>
    </div>
    <div className="flex flex-col items-start space-y-2">
      <span className="font-semibold">Arabic:</span>
      <div className="w-full h-4  bg-red-500" style={{ width: '40%' }} />
      <span>Basic</span>
    </div>
    <div className="flex flex-col items-start space-y-2">
      <span className="font-semibold">Hindi:</span>
      <div className="w-full h-4 bg-red-500" style={{ width: '40%' }} />
      <span>Basic</span>
    </div>
  </div>
</section>


    </div>
  );
}

export default Resume;
