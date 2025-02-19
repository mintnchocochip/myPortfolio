import React, { useEffect } from 'react'
import CTFDescription from '../components/CTFDescription'
import CTFList from '../components/CTFList'
import getTypesFromMask from '../assets/functions/CTF_type'
import AnimatedText from '../components/text'
import Header from '../components/Header'

// For now, the Question interface is basic, when you guys integrate it with the backend, you need to only change the interface here, as everywhere else it is just used to send the required data, like the questionId, the question, the description and the questionType.
interface Question {
  questionId: string
  question: string
  description: string
  questionType: number
  points: number
  solved: number
  author: string
}

const CTFs = () => {
  const [hoveredQuestionId, setHoveredQuestionId] = React.useState<string>('')
  const [selectedQuestionType, setSelectedQuestionType] =
    React.useState<string>('')

  // So this selected question ID contains whatever you click, I will create a function below that logs the current selected question ID in the console so that during backend integration, it will be easy for you. Everything else happens on its own in the individual components.
  const [selectedQuestionId, setSelectedQuestionId] = React.useState<string>('')

  const doAction = (questionId: string) => {
    console.log('Selected question ID: ', questionId)
  }

  useEffect(() => {
    doAction(selectedQuestionId)
  }, [selectedQuestionId])

  // This will eventually be fed by the backend
  const questions: Question[] = [
    {
      questionId: '1',
      question: 'Web Warriors',
      description:
        'A simple login bypass challenge. Can you find the hidden way in?',
      questionType: 32,
      points: 1,
      solved: 120,
      author: 'John Doe'
    },
    {
      questionId: '2',
      question: 'Digital Footprint',
      description: `An investigative OSINT challenge. Find the target's email using public data.`,
      questionType: 64,
      points: 15,
      solved: 90,
      author: 'Jane Doe'
    },
    {
      questionId: '3',
      question: 'Binary Breakdown',
      description:
        'A stripped binary file is provided. Reverse it to find the secret key!',
      questionType: 8,
      points: 25,
      solved: 50,
      author: 'Alice Smith'
    },
    {
      questionId: '4',
      question: 'Pixel Forensics',
      description:
        'A suspicious image is attached. Can you extract the hidden message?',
      questionType: 2,
      points: 20,
      solved: 75,
      author: 'Bob Johnson'
    },
    {
      questionId: '5',
      question: 'Crypto Heist',
      description:
        'The encrypted text looks suspiciously easy. Can you decrypt it?',
      questionType: 32,
      points: 30,
      solved: 40,
      author: 'Charlie Brown'
    },
    {
      questionId: '6',
      question: 'Reverse Roulette',
      description:
        'A compiled Python script does something odd. Decompile and analyze!',
      questionType: 16,
      points: 50,
      solved: 25,
      author: 'David Wilson'
    },
    {
      questionId: '7',
      question: 'Injection Station',
      description: 'SQL injection vulnerability detected. Dump the database!',
      questionType: 1,
      points: 35,
      solved: 60,
      author: 'Eve Davis'
    },
    {
      questionId: '8',
      question: 'Lost in Encoding',
      description:
        'This file is encoded multiple times. Can you decode it back to plain text?',
      questionType: 32,
      points: 15,
      solved: 100,
      author: 'Frank Miller'
    },
    {
      questionId: '9',
      question: 'Shadow Files',
      description:
        'A hidden file was found in the logs. Analyze it to find the flag.',
      questionType: 2,
      points: 18,
      solved: 85,
      author: 'Grace Lee'
    },
    {
      questionId: '10',
      question: 'Memory Corruptor',
      description: 'This binary is vulnerable to buffer overflows. Exploit it!',
      questionType: 8,
      points: 75,
      solved: 10,
      author: 'Hank Green'
    },
    {
      questionId: '11',
      question: 'Admin Panel Hunt',
      description: `A website has an admin panel, but it's hidden. Find and access it!`,
      questionType: 1,
      points: 20,
      solved: 95,
      author: 'Ivy White'
    },
    {
      questionId: '12',
      question: 'Dumpster Diving',
      description: 'Extract sensitive data from an old PCAP file.',
      questionType: 2,
      points: 22,
      solved: 65,
      author: 'Jack Black'
    },
    {
      questionId: '13',
      question: 'Flag in RAM',
      description: 'Analyze the given memory dump to extract a secret.',
      questionType: 4,
      points: 55,
      solved: 30,
      author: 'Karen Brown'
    },
    {
      questionId: '14',
      question: 'XOR Madness',
      description:
        'Decrypt this text that has been XOR-ed with a repeating key.',
      questionType: 32,
      points: 40,
      solved: 45,
      author: 'Larry King'
    },
    {
      questionId: '15',
      question: 'Hash Buster',
      description: 'Crack this hashed password and reveal the flag!',
      questionType: 32,
      points: 28,
      solved: 80,
      author: 'Mona Lisa'
    },
    {
      questionId: '16',
      question: 'Undercover Login',
      description: 'Can you bypass this weak authentication system?',
      questionType: 1,
      points: 42,
      solved: 38,
      author: 'Nina Simone'
    },
    {
      questionId: '17',
      question: 'Bytecode Reversal',
      description: 'A Java class file is given. Reverse-engineer it!',
      questionType: 16,
      points: 33,
      solved: 57,
      author: 'Oscar Wilde'
    },
    {
      questionId: '18',
      question: 'Encrypted Zip',
      description: 'A password-protected ZIP file was found. Can you crack it?',
      questionType: 32,
      points: 20,
      solved: 110,
      author: 'Paul Newman'
    },
    {
      questionId: '19',
      question: 'Network Sniffing 101',
      description: 'Analyze a PCAP file and retrieve the login credentials.',
      questionType: 2,
      points: 48,
      solved: 25,
      author: 'Quincy Adams'
    },
    {
      questionId: '20',
      question: 'Stack Smashing',
      description:
        'A vulnerable C program is given. Exploit its stack overflow!',
      questionType: 8,
      points: 90,
      solved: 5,
      author: 'Rachel Green'
    },
    {
      questionId: '21',
      question: 'Obfuscated Script',
      description:
        'A heavily obfuscated JavaScript file hides a secret. Decode it!',
      questionType: 16,
      points: 24,
      solved: 60,
      author: 'Steve Jobs'
    },
    {
      questionId: '22',
      question: 'API Exploitation',
      description: 'This API has a misconfigured endpoint. Exploit it!',
      questionType: 1,
      points: 55,
      solved: 35,
      author: 'Tom Hanks'
    },
    {
      questionId: '23',
      question: 'Web Crawler',
      description: 'A hidden flag exists deep within the site. Find it!',
      questionType: 1,
      points: 30,
      solved: 85,
      author: 'Uma Thurman'
    },
    {
      questionId: '24',
      question: 'Twitter Hunt',
      description:
        'A flag is hidden in a Twitter thread. Find it using OSINT techniques!',
      questionType: 64,
      points: 25,
      solved: 70,
      author: 'Victor Hugo'
    },
    {
      questionId: '25',
      question: 'Secure or Not?',
      description: `Analyze a website's SSL configuration and find vulnerabilities.`,
      questionType: 69,
      points: 38,
      solved: 45,
      author: 'Walt Disney'
    }
  ]

  return (
    <div className="flex h-screen w-screen flex-col font-neuebit">
      <Header
        links={[
          { text: 'Leaderboard', path: '/leaderboard' },
          { text: 'Challenges', path: '#' },
          { text: 'Team', path: '/team' }
        ]}
      />
      <div className="mt-4 flex w-screen flex-row justify-center overflow-visible text-3xl">
        <div className="scrollbar-hide flex w-[80%] overflow-visible whitespace-nowrap">
          {/* You should update these tags if you update the challengeTypes in the CTF_type.tsx file */}
          {[
            { label: 'ALL', value: '' },
            { label: 'Web', value: 'Web' },
            { label: 'OSINT', value: 'OSINT' },
            { label: 'Binary', value: 'Binary' },
            { label: 'Reversing', value: 'Reversing' },
            { label: 'Forensics', value: 'Forensics' },
            { label: 'Crypto', value: 'Crypto' },
            { label: 'Miscellaneous', value: 'Miscellaneous' }
          ].map((type) => (
            <span
              key={type.value}
              className={`pointy border border-white px-8 py-4 transition-all hover:-translate-y-4 hover:translate-x-2 hover:bg-white hover:text-black ${
                selectedQuestionType === type.value
                  ? 'bg-white text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelectedQuestionType(type.value)}
            >
              <AnimatedText text={`${type.label}`} />
            </span>
          ))}
        </div>
      </div>

      <div className="flex min-h-0 flex-grow flex-row justify-center">
        <CTFList
          ctfList={questions.filter((question) =>
            selectedQuestionType
              ? getTypesFromMask(question.questionType).includes(
                  selectedQuestionType
                )
              : true
          )}
          onHover={setHoveredQuestionId}
          onClick={setSelectedQuestionId}
        />
        <CTFDescription
          description={
            questions.find(
              (question) => question.questionId === hoveredQuestionId
            )?.description || ''
          }
          points={
            questions.find(
              (question) => question.questionId === hoveredQuestionId
            )?.points || 0
          }
          author={
            questions.find(
              (question) => question.questionId === hoveredQuestionId
            )?.author || ''
          }
          tags={
            getTypesFromMask(
              questions.find(
                (question) => question.questionId === hoveredQuestionId
              )?.questionType || 0
            ) || []
          }
        />
      </div>
    </div>
  )
}

export default CTFs
