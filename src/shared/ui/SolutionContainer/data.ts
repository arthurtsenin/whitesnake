type SolutionType = {
  id: number;
  text: Array<string>;
  image: string;
};

export const SOLUTIONS: Array<SolutionType> = [
  {
    id: 1,
    text: [
      "Firstly, we created a visual interface constructor for building chatbots. This user-friendly interface empowered customers to design and customize chatbots according to their specific requirements without the need for extensive coding knowledge.",
      "Additionally, our team developed the back-end part of the bot rating system, allowing customers to provide feedback on the performance of AI-powered chatbots. This rating system helped evaluate and improve the chatbots effectiveness in handling customer queries, ensuring a better user experience.",
      "Leveraging a robust tech stack consisting of Python, FastAPI, Aiohttp, Tensorflow, Pandas, PostgreSQL, Docker, Docker-Compose, Kubernetes, Redis, Kafka, GitHub, Seldon, Prometheus, we delivered a powerful and scalable solution.",
    ],
    image: "",
  },
  {
    id: 2,
    text: [
      "Python served as the foundation of our development, enabling us to build efficient and reliable backend functionalities. FastAPI and Aiohttp were utilized to create high-performance RESTful APIs for seamless integration and communication with the front-end and other services. These frameworks, in conjunction with PostgreSQL, ensured the secure and efficient storage and retrieval of data related to bot ratings and configurations.",
      "To power the AI capabilities of the chatbots, we employed Tensorflow, enabling us to develop and deploy advanced machine learning els. We utilized Pandas for effective data manipulation and analysis, ensuring accurate and meaningful insights from customer interactions.",
      "Containerization played a vital role in our solution, with Docker and Docker-Compose enabling easy local development and deployment.  Kubernetes provided a scalable and resilient container orchestration platform for seamless deployment and management in a production environment.",
    ],
    image: "",
  },
  {
    id: 3,
    text: [
      "For real-time data streaming and processing, we utilized Redis and Kafka. Redis acted as a fast and reliable in-memory data store, while Kafka facilitated the smooth transfer of data between different components of the system.",
      "Version control and collaborative development were streamlined through GitHub, ensuring efficient collaboration and code management. Seldon was employed for model serving and deployment, enabling the seamless integration of machine learning models into the system.",
      "To monitor and track system performance, we implemented Prometheus for metrics collection and analysis, ensuring continuous system health monitoring.",
    ],
    image: "",
  },
];
