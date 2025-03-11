'use client'

import { useState } from 'react'
import { Modal } from 'antd'

export function CurrentOpportunities () {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      category: 'Property Consultant Track',
      description: `Start your career in property consultancy with hands-on roles at
            Proppa House Ltd.`,
      jobs: [
        {
          id: 1,
          title: 'Property Viewer',
          type: 'Full-Time / Part-Time',
          training: 'Yes',
          salary: 'Competitive, based on per-viewing payment',
          locations:
            'Remote (Covering: London, Hull, Sheffield, Liverpool, Doncaster, Manchester, Leeds, Derby)',
          description:
            'Conduct property inspections and verifications on behalf of clients.',
          about:
            'As a Property Viewer, you will visit properties on behalf of clients, conduct detailed inspections, take photos, videos, and provide relevant reports.',
          responsibilities: [
            'Conduct on-site property inspections based on client requests',
            'Verify property details against online listings or agent descriptions',
            'Maintain a professional and trustworthy demeanor when representing clients',
            'Take high-quality photos and videos to document the property condition',
            'Coordinate with landlords, agents, and property managers for access to properties',
            'Communicate findings clearly via written reports and video calls'
          ],
          requirements: [
            'Strong attention to detail and ability to assess property conditions',
            'Excellent communication and report-writing skills',
            'Self-motivated and reliable, able to manage schedules independently',
            'Comfortable using smartphones, cameras, and reporting tools',
            'No prior experience required - full training provided',
            'Access to a smartphone or camera and reliable transportation is a plus'
          ],
          image:
            '/assets/property_v.png'
        },
        {
          id: 2,
          title: 'Property Search Consultant',
          description:
            'Assist clients in finding their ideal homes and investment properties.',
          type: 'Full-Time / Part-Time',
          training: 'Yes',
          salary: 'Competitive, based on per-viewing payment',
          locations:
            'Remote (Covering: London, Hull, Sheffield, Liverpool, Doncaster, Manchester, Leeds, Derby)',

          about:
            'As a Property Viewer, you will visit properties on behalf of clients, conduct detailed inspections, take photos, videos, and provide relevant reports.',
          responsibilities: [
            'Conduct on-site property inspections based on client requests',
            'Verify property details against online listings or agent descriptions',
            'Maintain a professional and trustworthy demeanor when representing clients',
            'Take high-quality photos and videos to document the property condition',
            'Coordinate with landlords, agents, and property managers for access to properties',
            'Communicate findings clearly via written reports and video calls'
          ],
          requirements: [
            'Strong attention to detail and ability to assess property conditions',
            'Excellent communication and report-writing skills',
            'Self-motivated and reliable, able to manage schedules independently',
            'Comfortable using smartphones, cameras, and reporting tools',
            'No prior experience required - full training provided',
            'Access to a smartphone or camera and reliable transportation is a plus'
          ],
          image:
           '/assets/Property_Search_Consultant.png'
        }
      ]
    },
    {
      category: 'Property Maintenance Services',
      description: `Help us maintain high standards of property care with expertise in:`,
      jobs: [
        {
          id: 1,
          title: 'House Cleaning',
          type: 'Full-Time / Part-Time',
          training: 'Yes',
          salary: 'Competitive, based on per-viewing payment',
          locations:
            'Remote (Covering: London, Hull, Sheffield, Liverpool, Doncaster, Manchester, Leeds, Derby)',
          description:
            'Assist clients in maintaining spotless, hygienic, and move-in-ready properties.',
          about:
            'As a House Cleaning, you will visit properties on behalf of clients, conduct detailed inspections, take photos, videos, and provide relevant reports.',
          responsibilities: [
            'Conduct on-site property inspections based on client requests',
            'Verify property details against online listings or agent descriptions',
            'Maintain a professional and trustworthy demeanor when representing clients',
            'Take high-quality photos and videos to document the property condition',
            'Coordinate with landlords, agents, and property managers for access to properties',
            'Communicate findings clearly via written reports and video calls'
          ],
          requirements: [
            'Strong attention to detail and ability to assess property conditions',
            'Excellent communication and report-writing skills',
            'Self-motivated and reliable, able to manage schedules independently',
            'Comfortable using smartphones, cameras, and reporting tools',
            'No prior experience required - full training provided',
            'Access to a smartphone or camera and reliable transportation is a plus'
          ],
          image:
            '/assets/House_Cleaning.png'
        },
        {
          id: 2,
          title: 'Lawn & Garden Maintenance',
          description:
            'Support clients in preserving beautiful, well-kept outdoor spaces.',
          type: 'Full-Time / Part-Time',
          training: 'Yes',
          salary: 'Competitive, based on per-viewing payment',
          locations:
            'Remote (Covering: London, Hull, Sheffield, Liverpool, Doncaster, Manchester, Leeds, Derby)',

          about:
            'As a Lawn & Garden Maintenance, you will visit properties on behalf of clients, conduct detailed inspections, take photos, videos, and provide relevant reports.',
          responsibilities: [
            'Conduct on-site property inspections based on client requests',
            'Verify property details against online listings or agent descriptions',
            'Maintain a professional and trustworthy demeanor when representing clients',
            'Take high-quality photos and videos to document the property condition',
            'Coordinate with landlords, agents, and property managers for access to properties',
            'Communicate findings clearly via written reports and video calls'
          ],
          requirements: [
            'Strong attention to detail and ability to assess property conditions',
            'Excellent communication and report-writing skills',
            'Self-motivated and reliable, able to manage schedules independently',
            'Comfortable using smartphones, cameras, and reporting tools',
            'No prior experience required - full training provided',
            'Access to a smartphone or camera and reliable transportation is a plus'
          ],
          image:
             '/assets/Lawn.png'
        },
        {
          id: 3,
          title: 'Repairs, Fittings & Fixtures',
          description:
            'Help clients ensure their properties remain functional, safe, and well-maintained with these handyman services',
          type: 'Full-Time / Part-Time',
          training: 'Yes',
          salary: 'Competitive, based on per-viewing payment',
          locations:
            'Remote (Covering: London, Hull, Sheffield, Liverpool, Doncaster, Manchester, Leeds, Derby)',

          about:
            'As a Repairs, Fittings & Fixtures, you will visit properties on behalf of clients, conduct detailed inspections, take photos, videos, and provide relevant reports.',
          responsibilities: [
            'Conduct on-site property inspections based on client requests',
            'Verify property details against online listings or agent descriptions',
            'Maintain a professional and trustworthy demeanor when representing clients',
            'Take high-quality photos and videos to document the property condition',
            'Coordinate with landlords, agents, and property managers for access to properties',
            'Communicate findings clearly via written reports and video calls'
          ],
          requirements: [
            'Strong attention to detail and ability to assess property conditions',
            'Excellent communication and report-writing skills',
            'Self-motivated and reliable, able to manage schedules independently',
            'Comfortable using smartphones, cameras, and reporting tools',
            'No prior experience required - full training provided',
            'Access to a smartphone or camera and reliable transportation is a plus'
          ],
          image:
              '/assets/Repairs.png'
        }
      ]
    }
  ]

  return (
    <section className='py-16'>
      <div className='container'>
        <h2 className='text-4xl font-bold text-center text-primary mb-4'>
          Current Opportunities
        </h2>
        <p className='text-center text-gray-600 max-w-4xl mx-auto mb-12'>
          At Proppa House, we're on a mission to provide exceptional property
          viewing, verification, and maintenance services. Explore diverse roles
          tailored to your skills and passions, and become a part of our growing
          team. Whether you're experienced or just starting out, we offer
          ongoing training and support to help you succeed.
        </p>

        {jobs.map((job, i) => (
          <div key={i} className='mb-12'>
            <h3 className='text-2xl font-bold text-center text-primary mb-4'>
              {job.category}
            </h3>
            <p className='text-center text-gray-600 mb-8'>{job.description}</p>

            <div className='grid md:grid-cols-2 max-w-5xl mx-auto gap-8'>
              {job.jobs.map(job => (
                <div
                  key={job.id}
                  className='relative rounded-xl overflow-hidden cursor-pointer group'
                  onClick={() => setSelectedJob(job)}
                >
                  <img
                    src={job.image || '/placeholder.svg'}
                    alt={job.title}
                    className='w-full h-[416px] object-cover'
                  />
                  <div
                    className='absolute inset-0 flex flex-col justify-end p-6 text-white'
                    style={{
                      background:
                        'linear-gradient(0deg, #131E47 22.35%, rgba(0, 49, 100, 0) 100%)'
                    }}
                  >
                    <h4 className='text-2xl font-bold '>{job.title}</h4>
                    <p className='text-white/80'>{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <Modal
          open={!!selectedJob}
          onCancel={() => setSelectedJob(null)}
          
          footer={[
            <button
              key='apply'
              onClick={() => {
                setSelectedJob(null)
                // Add application logic here
              }}
              className='w-full bg-[#44CCFF] text-black py-3 rounded-lg font-medium hover:bg-[#3ea6cc] transition-colors'
            >
              Apply Now!
            </button>
          ]}
          styles={{
            content: { padding: 0, overflow: 'hidden' },
            footer: {
              display: 'flex',
              gap: '1rem',
              padding: '4rem',
              paddingTop: 0
            }
           
            
          }}
          width='100%'
        >
          <img
            src={selectedJob?.image}
            alt={selectedJob?.title}
            className='w-full h-screen object-cover'
          />
          <h1 className='text-3xl lg:text-5xl text-primary font-bold transition-all my-4 text-center'>
            {selectedJob?.title}
          </h1>
          <div className='flex flex-col p-4 md:p-6 lg:p-16'>
            {selectedJob && (
              <div className='space-y-6'>
                <div className='flex items-center flex-wrap gap-2 text-xl'>
                  <h4 className='font-bold  text-[#131E47] '>Job Title:</h4>
                  <p>{selectedJob.title}</p>
                </div>
                {selectedJob.type && (
                  <div className='flex items-center gap-2 flex-wrap text-xl'>
                    <h4 className='font-bold  text-[#131E47] '>Job Type:</h4>
                    <p>{selectedJob.type}</p>
                  </div>
                )}
                {selectedJob.training && (
                  <div className='flex items-center gap-2 flex-wrap text-xl'>
                    <h4 className='font-bold  text-[#131E47]'>
                      Training Provided:
                    </h4>
                    <p>{selectedJob.training}</p>
                  </div>
                )}
                {selectedJob.salary && (
                  <div className='flex items-center gap-2 flex-wrap text-xl'>
                    <h4 className='font-bold  text-[#131E47] '>Salary:</h4>
                    <p>{selectedJob.salary}</p>
                  </div>
                )}
                {selectedJob.locations && (
                  <div className='flex items-center gap-2 flex-wrap text-xl'>
                    <h4 className='font-bold  text-[#131E47] '>Location:</h4>
                    <p>{selectedJob.locations}</p>
                  </div>
                )}
                {selectedJob.about && (
                  <div className='flex flex-col gap-5'>
                    <h4 className='font-bold text-4xl text-[#131E47] '>
                      About this Job:
                    </h4>
                    <p>{selectedJob.about}</p>
                  </div>
                )}
                {selectedJob.responsibilities && (
                  <div className='flex flex-col gap-5'>
                    <h4 className='font-bold text-4xl text-[#131E47] '>
                      Key Responsibilities:
                    </h4>
                    <ul className='list-disc pl-5 space-y-2'>
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedJob.requirements && (
                  <div className='flex flex-col gap-5'>
                    <h4 className='font-bold text-4xl text-[#131E47] '>
                      Requirements & Qualifications:
                    </h4>
                    <ul className='list-disc pl-5 space-y-2'>
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </Modal>
      </div>
    </section>
  )
}
