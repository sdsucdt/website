export const randomGradient = (): string[] => {
  const gradients: string[][] = [
    ['bg-gradient-to-r from-yellow-600 to-pink-600', 'text-yellow-100'],
    ['bg-gradient-to-r from-blue-400 to-purple-600', 'text-blue-100'],
    ['bg-gradient-to-r from-green-400 to-blue-300', 'text-green-100'],
    ['bg-gradient-to-r from-purple-500 to-indigo-500', 'text-purple-100'],
    ['bg-gradient-to-r from-sdsu-red to-gray-800', 'text-red-100'],
  ];

  return gradients[Math.floor(Math.random() * gradients.length)];
};

export type Card = {
  image: JSX.Element;
  header: string;
  text: string;
};

export type Button = {
  link: string;
  text: string;
  icon: JSX.Element;
};

export type Person = {
  image: JSX.Element;
  name: string;
  job: string;
  linkedin?: string;
  github?: string;
};

export type Quote = {
  quote: string;
  name: string;
  graduationYear: string;
  job?: string;
};
