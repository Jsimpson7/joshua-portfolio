import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Luke Coleman',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+40) 321 654 876',
    },
    {
      fieldName: 'Experience',
      fieldValue: '12+ Years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'luke.01',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'American',
    },
    {
      fieldName: 'Email',
      fieldValue: 'luke.01@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Spanish',
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  items: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2021',
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
    },
    {
      company: 'Tech Academy',
      position: 'Teaching Assistant',
      duration: '2019 - 2020',
    },
    {
      company: 'Digital Agency',
      position: 'UI/UX Designer',
      duration: '2018 - 2019',
    },
    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2017 - 2018',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  items: [
    {
      institution: 'Online Course Platform',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2023',
    },
    {
      institution: 'Codecademy',
      degree: 'Front-end Track',
      duration: '2022',
    },
    {
      institution: 'Online Course',
      degree: 'Programming Course',
      duration: '2020 - 2021',
    },
    {
      institution: 'Tech Institute',
      degree: 'Certified Web Developer',
      duration: '2019',
    },

    {
      institution: 'Design School',
      degree: 'Diploma in Graphic Design',
      duration: '2016 - 2018',
    },
    {
      institution: 'Community College',
      degree: 'Associate Degree in Computer Science',
      duration: '2014 - 2016',
    },
  ],
};

const skills = [
  {
    icon: <FaHtml5 />,
    name: 'html 5',
  },
  {
    icon: <FaCss3 />,
    name: 'css 3',
  },
  {
    icon: <FaJs />,
    name: 'javascript',
  },
  {
    icon: <FaReact />,
    name: 'react.js',
  },
  {
    icon: <SiNextdotjs />,
    name: 'next.js',
  },
  {
    icon: <SiTailwindcss />,
    name: 'tailwind.css',
  },
  {
    icon: <FaNodeJs />,
    name: 'node.js',
  },
  {
    icon: <FaFigma />,
    name: 'figma',
  },
];

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Resume = () => {
  return (
    <section className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <h2 className='h2 mb-2 text-white text-center xl:text-left'>
              Why hire me?
            </h2>
            <p className='mb-4 text-white/60 p-0 text-center xl:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                {experience.items.map((item, index) => {
                  return (
                    <li
                      className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center gap-1'
                      key={index}
                    >
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px]'>
                        {item.position}
                      </h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            {/* education */}
            <TabsContent value='education' className='w-full'>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                {education.items.map((item, index) => {
                  return (
                    <li
                      className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center gap-1'
                      key={index}
                    >
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px]'>
                        {item.degree}
                      </h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.institution}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              {/* <div className='flex flex-col justify-center h-full'> */}
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.map((skill, index) => {
                  return (
                    <li className='' key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
              {/* </div> */}
            </TabsContent>
            {/* about */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className='flex items-center justify-center xl:justify-start gap-4'
                        key={index}
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;

{
  /* <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
  <div>
    <div className='flex items-center gap-8 mb-10 h-[80px]'>
      <Image src={experience.icon} width={40} height={40} alt='' />
      <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
        {experience.title}
      </h2>
    </div>
    <div className='flex flex-col gap-6'>
      {experience.items.map((item, index) => {
        return (
          <div
            key={index}
            className='border border-white/5 px-8 py-6 rounded-xl min-h-[160px] flex flex-col gap-2 hover:border-accent transition-all duration-300'
          >
            <p className='text-accent text-lg'>{item.duration}</p>
            <h4 className='text-xl uppercase font-bold tracking-[1.2px]'>
              {item.position}
            </h4>
            <p className='text-white/60 text-lg leading-normal'>
              {item.company}
            </p>
          </div>
        );
      })}
    </div>
  </div>
  <div>
    <div className='flex items-center gap-8 mb-10 h-[80px]'>
      <Image src={education.icon} width={40} height={40} alt='' />
      <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
        {education.title}
      </h2>
    </div>
    <div className='flex flex-col gap-6'>
      {education.items.map((item, index) => {
        return (
          <div
            key={index}
            className='border border-white/5 px-8 py-6 rounded-xl min-h-[160px] flex flex-col gap-2 hover:border-accent transition-all duration-300'
          >
            <p className='text-accent text-lg'>{item.duration}</p>
            <h4 className='text-xl uppercase font-bold tracking-[1.2px]'>
              {item.degree}
            </h4>
            <p className='text-white/60 text-lg leading-normal'>
              {item.institution}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</div>; */
}
